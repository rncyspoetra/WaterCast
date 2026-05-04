import axios from "axios";

export const getForecastData = async (token) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}predict`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );

  console.log(res.data.data)

  return res.data.data;
};