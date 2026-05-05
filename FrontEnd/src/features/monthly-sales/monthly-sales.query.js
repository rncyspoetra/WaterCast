import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMonthlySalesData,
  deleteMonthlySales,
  updateMonthlySales,
  createMonthlySales,
} from "../../services/MonthlySalesService";

export const useMonthlySalesQuery = () => {
  const { token } = useSelector((state) => state.auth);

  return useQuery({
    queryKey: ["monthly-sales", token],
    queryFn: () => getMonthlySalesData(token),
    enabled: !!token,
  });
};

export const useDeleteMonthlySales = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: ({ id }) => {
      return deleteMonthlySales(id, token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["monthly-sales", token]);
    },
  });
};

export const useCreateMonthlySales = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: (payload) => createMonthlySales({ token, payload }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["monthly-sales", token],
      });
    },
  });
};

export const useUpdateMonthlySales = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: (variables) => {
      const { id, data } = variables;
      return updateMonthlySales(id, data, token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["monthly-sales", token],
      });
    },
  });
};
