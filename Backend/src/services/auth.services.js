import { comparePassword } from "../utils/hash.js";
import {
  getUserByUsername,
  getUserById,
  getMeById,
} from "../repository/users.repository.js";
import {
  generateRefreshToken,
  generateAccessToken,
  verifyRefreshToken,
} from "../utils/token.js";
import * as authRepository from "../repository/auth.repository.js";
import { HttpError } from "../utils/HttpError.js";

export const login = async (username, password) => {
  try {
    const user = await getUserByUsername(username);

    if (!user) {
      throw new Error("User Not Found");
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      throw new Error("Wrong Password");
    }

    const payloadRefreshToken = { id: user.id_users };

    const payloadAccessToken = {
      id: user.id_users,
      username: user.username,
      role: user.role,
    };

    const refreshToken = await generateRefreshToken(payloadRefreshToken);
    const accessToken = await generateAccessToken(payloadAccessToken);

    await authRepository.createRefreshToken(refreshToken);

    return {
      refreshToken,
      accessToken,
    };
  } catch (error) {
    throw error;
  }
};

export const getMe = async (id) => {
  try {
    const user = await getMeById(id);

    if (!user) {
      throw new Error("User Not Found");
    }

    return user;
  } catch (error) {
    throw error;
  }
};

export const logout = async (refreshToken) => {
  return await authRepository.deleteRefreshToken(refreshToken);
};

export const refreshAccessToken = async (refreshToken) => {
  try {
    const token = await authRepository.getRefreshToken(refreshToken);

    if (!token) {
      throw new HttpError("Refresh Token Not Found", 403);
    }

    let payload;
    try {
      payload = await verifyRefreshToken(token.token);
    } catch (err) {
      await authRepository.deleteRefreshToken(refreshToken);
      throw new HttpError("Invalid or expired refresh token", 403);
    }

    const user = await getUserById(payload.id);

    const payloadAccessToken = {
      id: user.id_users,
      username: user.username,
      role: user.role,
    };

    const accessToken = await generateAccessToken(payloadAccessToken);

    return {
      accessToken,
    };
  } catch (error) {
    throw error;
  }
};
