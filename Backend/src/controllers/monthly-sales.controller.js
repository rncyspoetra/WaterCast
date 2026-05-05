import * as monthlySalesServices from "../services/monthly-sales.services.js";

export const getAllMonthlySales = async (req, res) => {
  try {
    const monthlySales = await monthlySalesServices.getAllMonthlySales();

    return res.status(200).json({
      status: "success",
      message: "Get All Monthly Sales Success",
      data: monthlySales,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const getMonthlySalesById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const monthlySale = await monthlySalesServices.getMonthlySalesById(id);

    return res.status(200).json({
      status: "success",
      message: "Get Monthly Sale Success",
      data: monthlySale,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const createMonthlySales = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = {
      userId,
      ...req.body,
    };

    const monthlySaleId = await monthlySalesServices.createMonthlySales(data);

    return res.status(201).json({
      status: "success",
      message: "Monthly Sale Created",
      data: { monthlySaleId },
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const updateMonthlySales = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    const monthlySaleId = await monthlySalesServices.updateMonthlySales(
      id,
      data,
    );

    return res.status(200).json({
      status: "success",
      message: "Monthly Sale Updated",
      data: { monthlySaleId },
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const deleteMonthlySales = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await monthlySalesServices.deleteMonthlySales(id);

    return res
      .status(200)
      .json({ status: "success", message: "Monthly Sale Deleted" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};
