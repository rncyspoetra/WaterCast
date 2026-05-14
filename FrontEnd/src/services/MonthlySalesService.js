import api from "../helpers/interceptors";

export const getMonthlySalesData = async () => {
  const res = await api.get("sales/monthly");

  return res.data.data;
};

export const getMonthlySalesDataById = async (id) => {
  const res = await api.get(`sales/monthly/${id}`);

  return res.data.data;
};

export const deleteMonthlySales = async (id) => {
  const res = await api.delete(`sales/monthly/${id}`);

  return res.data;
};

export const createMonthlySales = async ({ payload }) => {
  const res = await api.post("sales/monthly", payload);

  return res.data;
};

export const updateMonthlySales = async (id, data) => {
  const res = await api.patch(`sales/monthly/${id}`, data);

  return res.data;
};
