import { AddMealInput } from "../models/write/add-meal";
import * as mongoose from "mongoose";
import { mealSchema } from "./meal.entity";
import { MongoTemplate } from "src/shared/mongo-template";

const MealEntity = mongoose.model("Meal", mealSchema);

async function addMeal(id: string, addMeal: AddMealInput) {
  const meal = new MealEntity({
    _id: id,
    imageUrl: addMeal.imageUrl,
    name: addMeal.name,
  });

  await MongoTemplate.runOperation(async () => {
    await meal.save();
  });
}

export const MealsRepository = {
  addMeal
};
