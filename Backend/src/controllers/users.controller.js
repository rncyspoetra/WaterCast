import * as usersServices from "../services/users.services.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await usersServices.getAllUsers();

    return res.status(200).json({
      status: "success",
      message: "Get All User Success",
      data: users,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const user = await usersServices.getUserById(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User Not Found" });
    }

    return res
      .status(200)
      .json({ status: "success", message: "Get User Success", data: user });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const data = req.body;

    const userId = await usersServices.createNewUser(data);

    return res
      .status(201)
      .json({ status: "success", message: "User Created", data: { userId } });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    const user = await usersServices.getUserById(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User Not Found" });
    }

    const userId = await usersServices.updateUser(id, data);

    return res
      .status(200)
      .json({ status: "success", message: "User Updated", data: { userId } });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const user = await usersServices.getUserById(id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User Not Found" });
    }

    await usersServices.deleteUser(id);

    return res.status(200).json({ status: "success", message: "User Deleted" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};
