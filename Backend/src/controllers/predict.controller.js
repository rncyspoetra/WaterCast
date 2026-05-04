import * as predictServices from "../services/predict.services.js";
export const getPredictData = async (req, res) => {
  try {
    const predictions = await predictServices.getPredictData();

    return res.status(200).json({
      status: "success",
      message: "Get Data Predict Success",
      data: predictions,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};

export const createPredict = async (req, res) => {
  try {
    const predictions = await predictServices.createPredict();

    return res.status(200).json({
      status: "success",
      message: "Forecast generated successfully",
      data: predictions,
    });
  } catch (error) {
    res
      .status(error.statusCode || 500)
      .json({ status: "error", message: error.message });
  }
};
