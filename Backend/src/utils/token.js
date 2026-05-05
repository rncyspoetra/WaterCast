import jwt from "jsonwebtoken";
import { HttpError } from "./HttpError.js";

export const generateRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_KEY, {
    expiresIn: "7d",
  });
};

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_KEY, {
    expiresIn: "1h",
  });
};

export const verifyRefreshToken = (refreshToken) => {
  const payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
  return payload;
};

export const verifyAccessToken = (accessToken) => {
  try {
    const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
    return payload;
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      throw new HttpError("Access token expired", 401, "TOKEN_EXPIRED");
    }
    throw new HttpError("Invalid access token", 403, "TOKEN_INVALID");
  }
};
