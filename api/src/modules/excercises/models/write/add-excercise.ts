import * as Joi from "joi";
import { MuscleGroup } from "../read/excercise";

export type AddExcerciseInput = {
  imageUrl: string;
  name: string;
  muscleGroup: MuscleGroup;
};

export const validationSchema = Joi.object({
  imageUrl: Joi.string().uri().required(),
  name: Joi.string().required(),
  muscleGroup: Joi.string().valid(...Object.keys(MuscleGroup)).required(),
});
