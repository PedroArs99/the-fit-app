import mongoose from "mongoose";
import { Meal } from "../models/read/meal";
const { Schema } = mongoose;

export type MealEntity = {
  _id: string,
  imageUrl: string,
  name: string,
}

export const mealSchema = new Schema<MealEntity>({
  _id: String,
  imageUrl: String,
  name: String,
});

export const MealEntity = mongoose.model("Meal", mealSchema);

export function toDomain(entity: MealEntity): Meal {
  return {
    id: entity._id,
    imageUrl: entity.imageUrl,
    name: entity.name,
  }
}