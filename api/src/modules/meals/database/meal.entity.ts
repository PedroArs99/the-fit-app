import mongoose from "mongoose";
import { Meal } from "../models/read/meal";
import { AddMealInput } from "../models/write/add-meal";
const { Schema } = mongoose;

export type MealEntity = {
  _id: string;
  imageUrl: string;
  name: string;
  nutritionalValues: {
    energy: number;
    fat: number;
    carbohydrates: number;
    fiber: number;
    protein: number;
    salt: number;
  };
};

export const mealSchema = new Schema<MealEntity>({
  _id: String,
  imageUrl: String,
  name: String,
  nutritionalValues: {
    energy: Number,
    fat: Number,
    carbohydrates: Number,
    fiber: Number,
    protein: Number,
    salt: Number,
  },
});

export const MealEntity = mongoose.model("Meal", mealSchema);

export function toEntity(id: string, input: AddMealInput) {
  return  new MealEntity ({
    _id: id,
    imageUrl: input.imageUrl,
    name: input.name,
    nutritionalValues: {
      energy: input.nutritionalValues.energy,
      fat: input.nutritionalValues.fat,
      carbohydrates: input.nutritionalValues.carbohydrates,
      fiber: input.nutritionalValues.fiber,
      protein: input.nutritionalValues.protein,
      salt: input.nutritionalValues.salt,
    },
  });
}

export function toDomain(entity: MealEntity): Meal {
  return {
    id: entity._id,
    imageUrl: entity.imageUrl,
    name: entity.name,
    nutritionalValues: {
      energy: entity.nutritionalValues.energy,
      fat: entity.nutritionalValues.fat,
      carbohydrates: entity.nutritionalValues.carbohydrates,
      fiber: entity.nutritionalValues.fiber,
      protein: entity.nutritionalValues.protein,
      salt: entity.nutritionalValues.salt,
    },
  };
}
