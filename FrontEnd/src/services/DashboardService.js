import axios from "axios";

export const getDashboardData = async (token) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}dashboard`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );

  return res.data.data;
};