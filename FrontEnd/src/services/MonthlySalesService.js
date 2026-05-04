import axios from "axios";
import { useSelector } from "react-redux";

export const getMonthlySalesData = async (token) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}sales/monthly`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return res.data.data;
};

export const getMonthlySalesDataById = async (token, id) => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}sales/monthly/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );

  return res.data.data;
};

export const deleteMonthlySales = async (id, token) => {
   console.log(`ID: ${id}, Token: ${token}`)
  const res = await axios.delete(
    `${import.meta.env.VITE_API_URL}sales/monthly/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    },
  );

  return res.data;
};

export const createMonthlySales = async ({ payload, token }) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}sales/monthly`,
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

export const updateMonthlySales = async (id, data, token) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_API_URL}sales/monthly/${id}`,
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
