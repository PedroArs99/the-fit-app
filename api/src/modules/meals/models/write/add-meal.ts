import * as Joi from "joi";

type NutritionalValuesInput = {
  energy: number;
  fat: number;
  carbohydrates: number;
  fiber: number;
  protein: number;
  salt: number;
};

export type AddMealInput = {
  imageUrl: string;
  name: string;
  nutritionalValues: NutritionalValuesInput;
};

export const validationSchema = Joi.object({
  imageUrl: Joi.string().uri().required(),
  name: Joi.string().required(),
  nutritionalValues: Joi.object({
    energy: Joi.number().required().min(0),
    fat: Joi.number().required().min(0),
    carbohydrates: Joi.number().required().min(0),
    fiber: Joi.number().required().min(0),
    protein: Joi.number().required().min(0),
    salt: Joi.number().required().min(0),
  }),
});
