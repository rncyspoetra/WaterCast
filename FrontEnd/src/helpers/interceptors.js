import axios from "axios";
import { getToken, setToken, removeToken } from "../services/TokenService";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}auth/refresh-token`,
          {},
          { withCredentials: true },
        );

        const newToken = res.data.data.accessToken.accessToken;

        setToken(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (error) {
        removeToken();

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
