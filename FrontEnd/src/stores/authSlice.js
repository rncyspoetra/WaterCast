import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../helpers/interceptors";
import axios from "axios";
import { getToken, setToken, removeToken } from "../services/TokenService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  token: getToken("token") || null,
};

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await api.post("auth/login", {
        username: user.username,
        password: user.password,
      });

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
    const response = await api.get("auth/me");

    return response.data.data;
  } catch (error) {
    if (error.response?.status === 401) {
      thunkAPI.dispatch(LogOut());
    }

    return thunkAPI.rejectWithValue(error.response?.data?.message);
  }
});

export const LogOut = createAsyncThunk("user/LogOut", async () => {
  await axios.delete(`${import.meta.env.VITE_API_URL}auth/logout`, {
    withCredentials: true,
  });

  console.log("Dispatch Logout");
});

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

      setToken(token);
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
    builder.addCase(LogOut.fulfilled, (state) => {
      state.user = null;
      state.token = null;

      removeToken();
    });
  },
});

export const { reset, setAccessToken } = authSlice.actions;
export default authSlice.reducer;
