import { prisma } from "../config/database.js";

export const getAllUsers = async () => {
  return await prisma.users.findMany();
};

export const getUserById = async (id) => {
  return await prisma.users.findUnique({
    where: { id_users: id },
  });
};

export const getMeById  = async (id) => {
  return await prisma.users.findUnique({
    where: { id_users: id },
    select: {
      id_users: true,
      username: true,
      role: true
    }
  });
};

export const createNewUser = async ({ username, password, role }) => {
  const newUser = await prisma.users.create({
    data: {
      username,
      password: password,
      role,
    },
  });
  return newUser.id_users;
};

export const updateUser = async (id, data) => {
  return await prisma.users.update({
    where: { id_users: id },
    data,
  });
};

export const deleteUser = async (id) => {
  return await prisma.users.delete({
    where: { id_users: id },
  });
};

export const getUserByUsername = async (username) => {
  return await prisma.users.findUnique({
    where: { username: username },
  });
};
