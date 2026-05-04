import * as dailySalesRepository from "../repository/daily-sales.repository.js";
import { HttpError } from "../utils/HttpError.js";
import { normalizeDate } from "../utils/helper.js";

export const getAllDailySales = async () => {
  const dailySales = await dailySalesRepository.getAllDailySales();

  return dailySales;
};

export const getDailySalesById = async (id) => {
  const dailySale = await dailySalesRepository.getDailySalesById(id);

  if (!dailySale) {
    throw new HttpError("Daily Sales Not Found", 404);
  }

  return dailySale;
};

export const createDailySales = async (data) => {
  try {
    if (data.terjual < 0) {
      throw new HttpError("Sold quantity cannot be less than 0", 400);
    }

    if (typeof data.terjual != "number") {
      throw new HttpError("Terjual Must Be a Number", 400);
    }

    data.tanggal = normalizeDate(data.tanggal);

    const newDailySale = await dailySalesRepository.createDailySales(data);

    return newDailySale;
  } catch (error) {
    throw error;
  }
};

export const updateDailySales = async (id, data) => {
  try {
    const existing = await dailySalesRepository.getDailySalesById(id);
    if (!existing) {
      throw new HttpError("Daily Sales Not Found", 404);
    }

    if (data.tanggal) {
      data.tanggal = normalizeDate(data.tanggal);
    }

    const dailySale = await dailySalesRepository.updateDailySales(id, data);

    return dailySale;
  } catch (error) {
    throw error;
  }
};

export const deleteDailySales = async (id) => {
  try {
    const existing = await dailySalesRepository.getDailySalesById(id);
    if (!existing) {
      throw new HttpError("Daily Sales Not Found", 404);
    }
    const result = await dailySalesRepository.deleteDailySales(id);

    return result;
  } catch (error) {
    throw error;
  }
};
