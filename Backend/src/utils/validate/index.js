import { HttpError } from "../HttpError.js";
import { userSchema, monthlySalesSchema } from "./schema.js";

export const validationUsers = ({ username, password, role }) => {
  const { value, error } = userSchema.validate({ username, password, role });
  if (error) {
    throw new HttpError(error.details[0].message, 400);
  }
};

export const validationMonthlySales = ({ bulan, tahun, total }) => {
  const { value, error } = monthlySalesSchema.validate({ bulan, tahun, total });
  if (error) {
    throw new HttpError(error.details[0].message, 400);
  }

  return value;
};
