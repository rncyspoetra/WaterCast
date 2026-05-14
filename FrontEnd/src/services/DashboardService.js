import api from "../helpers/interceptors";

export const getDashboardData = async () => {
  const res = await api.get("dashboard");

  return res.data.data;
};
