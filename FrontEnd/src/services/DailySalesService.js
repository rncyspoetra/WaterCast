import api from "../helpers/interceptors";

export const getDailySalesData = async () => {
  const res = await api.get("sales/daily");

  return res.data.data;
};

export const getDailySalesDataById = async (id) => {
  const res = await api.get(`sales/daily/${id}`);

  return res.data.data;
};

export const deleteDailySales = async (id) => {
  const res = await api.delete(`sales/daily/${id}`);

  return res.data;
};

export const createDailySales = async ({ payload }) => {
  const res = await api.post("sales/daily", payload);

  return res.data;
};

export const updateDailySales = async (id, data) => {
  const res = await api.patch(`sales/daily/${id}`, data);

  return res.data;
};
