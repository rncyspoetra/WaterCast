import axios from "axios";
import { useSelector } from "react-redux";

export const getUsersData = async (token) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return res.data.data;
};

export const getUsersDataById = async (token, id) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return res.data.data;
};

export const deleteUsers = async (id, token) => {
  const res = await axios.delete(`${import.meta.env.VITE_API_URL}users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    withCredentials: true,
  });

  return res.data;
};

export const createUsers = async ({ payload, token }) => {
  const res = await axios.post(
    `${import.meta.env.VITE_API_URL}users`,
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

export const updateUsers = async (id, data, token) => {
  const res = await axios.patch(
    `${import.meta.env.VITE_API_URL}users/${id}`,
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
