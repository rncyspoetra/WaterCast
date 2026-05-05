import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: localStorage.getItem("token") || null,
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}auth/login`,
        {
          username: user.username,
          password: user.password,
        },
        {
          withCredentials: true,
        },
      );
      return response.data.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        return thunkAPI.rejectWithValue(message);
      }
    }
  },
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    const response = await axios.get(`${import.meta.env.VITE_API_URL}auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    if (error.response?.status == 401) {
      try {
        const refreshRes = await axios.post(
          `${import.meta.env.VITE_API_URL}auth/refresh-token`,
          {},
          {
            withCredentials: true,
          },
        );

        const newToken = refreshRes.data.data.accessToken.accessToken;

        thunkAPI.dispatch(setAccessToken(newToken));

        const retry = await axios.get(
          `${import.meta.env.VITE_API_URL}auth/me`,
          {
            headers: {
              Authorization: `Bearer ${newToken}`,
            },
          },
        );

        return retry.data.data;
      } catch (refreshError) {
        thunkAPI.dispatch(LogOut());
        return thunkAPI.rejectWithValue("Session expired");
      }
    }

    return thunkAPI.rejectWithValue(error.response?.data?.message);
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete(`${import.meta.env.VITE_API_URL}auth/logout`);
});

export const refreshAccessToken = createAsyncThunk(
  "user/RefreshToken",
  async () => {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}auth/refresh-token`,
      {},
      {
        withCredentials: true,
      },
    );

    return res.data;
  },
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },

    setAccessToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const token = action.payload.accessToken;
      state.token = token;

      localStorage.setItem("token", token);
    });
    builder.addCase(LoginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(refreshAccessToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(refreshAccessToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const token = action.payload.accessToken;
      state.token = token;

      localStorage.setItem("token", token);
    });
    builder.addCase(refreshAccessToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(LogOut.fulfilled, (state, action) => {
      state.user = null;
      state.token = null;

      localStorage.removeItem("token");
    });
  },
});

export const { reset, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
