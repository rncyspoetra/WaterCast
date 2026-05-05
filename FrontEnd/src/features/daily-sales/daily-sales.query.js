import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getDailySalesData,
  deleteDailySales,
  updateDailySales,
  createDailySales,
} from "../../services/DailySalesService";

export const useDailySalesQuery = () => {
  const { token } = useSelector((state) => state.auth);

  return useQuery({
    queryKey: ["daily-sales", token],
    queryFn: () => getDailySalesData(token),
    enabled: !!token,
  });
};

export const useDeleteDailySales = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: ({ id }) => {
      return deleteDailySales(id, token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["daily-sales", token]);
    },
  });
};

export const useCreateDailySales = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: (payload) => createDailySales({ token, payload }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["daily-sales", token],
      });
    },
  });
};

export const useUpdateDailySales = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: (variables) => {
      const { id, data } = variables;
      return updateDailySales(id, data, token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["daily-sales", token],
      });
    },
  });
};
