import * as predictRepository from "../repository/predict.repository.js";
import * as monthlySalesRepository from "../repository/monthly-sales.repository.js";
import { HttpError } from "../utils/HttpError.js";

import {
  calculateMAD,
  calculateMSE,
  calculateMAPE,
  calculateSES,
} from "../utils/helper.js";

export const getPredictData = async () => {
  const result = await predictRepository.getAllPredict();

  if (result.count === 0) {
    return {
      count: 0,
      data: [],
      mad: 0,
      mse: 0,
      mape: 0,
      nextMonthPredict: 0,
    };
  }

  const mad = calculateMAD(result.data);
  const mse = calculateMSE(result.data);
  const mape = calculateMAPE(result.data);
  const nextMonthPredict = calculateSES(result.data);
  const averageSalesByMonth = await getAverageByMonth();

  return {
    count: result.count,
    data: result.data,
    mad,
    mse,
    mape,
    nextMonthPredict,
    averageSalesByMonth,
  };
};

export const generatePredictData = async (data) => {
  try {
    const newPredict = await predictRepository.createPredict(data);

    return newPredict;
  } catch (error) {
    throw error;
  }
};

export const createPredict = async () => {
  const actualData = await monthlySalesRepository.getAllMonthlySalesPredict();

  if (actualData.length == 0) {
    throw new HttpError("Cannot generate forecast. No sales data found.", 400);
  }

  let prevForecast = actualData[0].total;

  for (let i = 0; i < actualData.length; i++) {
    const current = actualData[i];

    let forecast;

    if (i === 0) {
      forecast = current.total;
    } else {
      const prevActual = actualData[i - 1].total;

      forecast = 0.4 * prevActual + (1 - 0.4) * prevForecast;
    }

    const error = current.total - forecast;

    await generatePredictData({
      id_penjualan_bulanan: current.id_penjualan_bulanan,
      hasil_prediksi: Number(forecast.toFixed(2)),
      error: Number(error.toFixed(2)),
    });

    prevForecast = forecast;
  }

  const predictData = await getPredictData();

  return predictData;
};

export const getAverageByMonth = async () => {
  try {
    const averageSalesByMonth =
      await monthlySalesRepository.getAverageByMonth();

    return averageSalesByMonth;
  } catch (error) {
    throw error;
  }
};
