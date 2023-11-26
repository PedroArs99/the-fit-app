import * as Joi from "joi";

export type AddMealInput = {
  imageUrl: string;
  name: string;
};

export const validationSchema = Joi.object({
  imageUrl: Joi.string().uri().required(),
  name: Joi.string().required(),
});

