import { useSelector } from "react-redux";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getUsersData,
  deleteUsers,
  updateUsers,
  createUsers,
} from "../../services/UsersService";

export const useUsersQuery = () => {
  const { token } = useSelector((state) => state.auth);

  return useQuery({
    queryKey: ["users", token],
    queryFn: () => getUsersData(token),
    enabled: !!token,
  });
};

export const useDeleteUsers = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: ({id}) => {
      return deleteUsers(id, token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["users"], token);
    },
  });
};

export const useCreateUsers = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: (payload) => createUsers({ token, payload }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users", token],
      });
    },
  });
};

export const useUpdateUsers = () => {
  const queryClient = useQueryClient();
  const { token } = useSelector((state) => state.auth);

  return useMutation({
    mutationFn: (variables) => {
      const { id, data } = variables;
      return updateUsers(id, data, token);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users", token],
      });
    },
  });
};
