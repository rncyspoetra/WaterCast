import Joi from "joi";

export const userSchema = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "user").required(),
});

export const monthlySalesSchema = Joi.object({
  bulan: Joi.number().integer().min(1).max(12).required(),
  tahun: Joi.number().integer().required(),
  total: Joi.number().integer().min(0).required(),
});
