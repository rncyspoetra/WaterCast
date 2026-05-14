import api from "../helpers/interceptors";

export const getUsersData = async () => {
  const res = await api.get("users");

  return res.data.data;
};

export const getUsersDataById = async (id) => {
  const res = await api.get(`users/${id}`);

  return res.data.data;
};

export const deleteUsers = async (id) => {
  const res = await api.delete(`users/${id}`);

  return res.data;
};

export const createUsers = async ({ payload }) => {
  const res = await api.post("users", payload);
  return res.data;
};

export const updateUsers = async (id, data) => {
  const res = await api.patch(`users/${id}`, data);

  return res.data;
};
