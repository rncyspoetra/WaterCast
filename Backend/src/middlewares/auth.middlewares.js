import { HttpError } from "../utils/HttpError.js";
import { verifyAccessToken } from "../utils/token.js";

export const isLogin = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      throw new HttpError("Access token missing", 401, "TOKEN_MISSING");
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new HttpError("Access token missing", 401, "TOKEN_MISSING");
    }

    const user = await verifyAccessToken(token);
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export const adminOnly = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Forbidden: Admins only" });
  }

  next();
};
