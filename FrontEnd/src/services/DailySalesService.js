import axios from "axios";
import { useSelector } from "react-redux";

export const getDailySalesData = async (token) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}sales/daily`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return res.data.data;
};

export const getDailySalesDataById = async (token, id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}sales/daily/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );

  return res.data.data;
};

export const deleteDailySales = async (id, token) => {
   console.log(`ID: ${id}, Token: ${token}`)
  const res = await axios.delete(
    `${import.meta.env.VITE_API_URL}sales/daily/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );

  return res.data;
};

export const createDailySales = async ({ payload, token }) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}sales/daily`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );
  return res.data;
};

export const updateDailySales = async (id, data, token) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_API_URL}sales/daily/${id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );

  return res.data;
};
