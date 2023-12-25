import * as Joi from "joi";

export type AddBodyMetricInput = {
  timestamp: Date;
  weight: number;
  muscleMassPercentage: number;
  fatMassPercentage: number;
  boneMassPercentage: number;
};

export const validationSchema = Joi.object({
  timestamp: Joi.date().required(),
  weight: Joi.number().positive().required(),
  muscleMassPercentage: Joi.number().positive().required(),
  fatMassPercentage: Joi.number().positive().required(),
  boneMassPercentage: Joi.number().positive().required(),
});