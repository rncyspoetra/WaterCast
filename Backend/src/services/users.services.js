import * as usersRepository from "../repository/users.repository.js";
import { validationUsers } from "../utils/validate/index.js";
import { hashPassword } from "../utils/hash.js";
import { HttpError } from "../utils/HttpError.js";

export const getAllUsers = async () => {
  const users = await usersRepository.getAllUsers();

  return users;
};

export const getUserById = async (id) => {
  if (!id) {
    throw new HttpError("Invalid ID", 400);
  }

  const users = await usersRepository.getUserById(id);

  return users;
};

export const createNewUser = async (data) => {
  try {
    const { username, password, role } = data;

    validationUsers(data);

    const existingUsername = await usersRepository.getUserByUsername(username);

    if (existingUsername) {
      throw new HttpError("Username Already Exists", 409);
    }

    const hashedPassword = await hashPassword(password);

    const newUserData = { ...data, password: hashedPassword };

    const newUser = await usersRepository.createNewUser(newUserData);

    return newUser;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, data) => {
  try {
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    const user = await usersRepository.updateUser(id, data);

    return user;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    if (!id) {
      throw new HttpError("Invalid ID", 400);
    }
    const result = await usersRepository.deleteUser(id);

    return result;
  } catch (error) {
    throw error;
  }
};
