import * as monthlySalesRepository from "../repository/monthly-sales.repository.js";
import { HttpError } from "../utils/HttpError.js";
import { validationMonthlySales } from "../utils/validate/index.js";
import { deleteAllPredict } from "../repository/predict.repository.js";
import { createPredict } from "./predict.services.js";

export const getAllMonthlySales = async () => {
  const monthlySales = await monthlySalesRepository.getAllMonthlySales();

  return monthlySales;
};

export const checkExistingMonth = async ({ bulan, tahun }) => {
  const existing = await monthlySalesRepository.checkExistingMonth({
    bulan,
    tahun,
  });

  if (existing) {
    throw new HttpError("Data for this month and year already exists.", 400);
  }

  return existing;
};

export const getMonthlySalesById = async (id) => {
  const monthlySale = await monthlySalesRepository.getMonthlySalesById(id);

  if (!monthlySale) {
    throw new HttpError("Monthly Sales Not Found", 404);
  }

  return monthlySale;
};

export const createMonthlySales = async (data) => {
  try {
    const { userId, ...payload } = data;

    const validatedData = validationMonthlySales(payload);

    await checkExistingMonth(validatedData);

    const newData = {
      userId,
      ...validatedData,
    };

    const newMonthlySale =
      await monthlySalesRepository.createMonthlySales(newData);

    await deleteAllPredict();

    await createPredict();

    return newMonthlySale;
  } catch (error) {
    throw error;
  }
};

export const updateMonthlySales = async (id, data) => {
  try {
    const existing = await monthlySalesRepository.getMonthlySalesById(id);
    if (!existing) {
      throw new HttpError("Monthly Sales Not Found", 404);
    }

    const monthlySale = await monthlySalesRepository.updateMonthlySales(
      id,
      data,
    );

    await deleteAllPredict();

    await createPredict();

    return monthlySale;
  } catch (error) {
    throw error;
  }
};

export const deleteMonthlySales = async (id) => {
  try {
    const existing = await monthlySalesRepository.getMonthlySalesById(id);

    if (!existing) {
      throw new HttpError("Monthly Sales Not Found", 404);
    }

    await deleteAllPredict();

    const result = await monthlySalesRepository.deleteMonthlySales(id);
    
    await createPredict();

    return result;
  } catch (error) {
    throw error;
  }
};
