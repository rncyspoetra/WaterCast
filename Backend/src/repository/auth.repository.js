import { prisma } from "../config/database.js";

export const createRefreshToken = async (refreshToken) => {
  const newToken = await prisma.authentications.create({
    data: {
      token: refreshToken,
    },
  });
};

export const deleteRefreshToken = async (refreshToken) => {
  return await prisma.authentications.deleteMany({
    where: {
      token: refreshToken,
    },
  });
};

export const getRefreshToken = async (token) => {
  return await prisma.authentications.findFirst({
    where: {
      token,
    },
  });
};
