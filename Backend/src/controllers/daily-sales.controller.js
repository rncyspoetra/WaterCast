import * as dailySalesServices from "../services/daily-sales.services.js";

export const getAllDailySales = async (req, res) => {
  try {
    const dailySales = await dailySalesServices.getAllDailySales();

    return res.status(200).json({
      status: "success",
      message: "Get All Daily Sales Success",
      data: dailySales,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const getDailySalesById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const dailySale = await dailySalesServices.getDailySalesById(id);

    return res.status(200).json({
      status: "success",
      message: "Get Daily Sale Success",
      data: dailySale,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const createDailySales = async (req, res) => {
  try {
    const userId = req.user.id;

    const data = {
      userId,
      ...req.body,
    };

    const dailySaleId = await dailySalesServices.createDailySales(data);

    return res.status(201).json({
      status: "success",
      message: "Daily Sale Created",
      data: { dailySaleId },
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const updateDailySales = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const data = req.body;

    const dailySaleId = await dailySalesServices.updateDailySales(id, data);

    return res.status(200).json({
      status: "success",
      message: "Daily Sale Updated",
      data: { dailySaleId },
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const deleteDailySales = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    await dailySalesServices.deleteDailySales(id);

    return res
      .status(200)
      .json({ status: "success", message: "Daily Sale Deleted" });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};
