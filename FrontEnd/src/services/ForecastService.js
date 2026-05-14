import api from "../helpers/interceptors";

export const getForecastData = async () => {
  const res = await api.get("predict");

  return res.data.data;
};
