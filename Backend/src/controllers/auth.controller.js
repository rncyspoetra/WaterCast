import * as authServices from "../services/auth.services.js";
import { HttpError } from "../utils/HttpError.js";

export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const { accessToken, refreshToken } = await authServices.login(
      username,
      password,
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      status: "success",
      message: "Login Sucess",
      data: { accessToken },
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await authServices.getMe(id);

    return res.status(200).json({
      status: "success",
      message: "Get Me Success",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res
        .status(204)
        .json({ status: "error", message: "Token Not Found" });
    }

    await authServices.logout(refreshToken);

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    return res.status(200).json({
      status: "success",
      message: "Logout Success",
    });
  } catch (error) {
    next(error);
  }
};

export const refreshAccessToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        status: "error",
        code: "REFRESH_TOKEN_MISSING",
        message: "Refresh token not found",
      });
    }

    const accessToken = await authServices.refreshAccessToken(refreshToken);

    return res.status(200).json({
      status: "success",
      message: "Refresh success",
      data: {
        accessToken,
      },
    });
  } catch (error) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });
    next(error);
  }
};
