import { AddMealInput } from "../models/write/add-meal";
import { MealEntity, toDomain } from "./meal.entity";
import { MongoTemplate } from "src/shared/mongo-template";

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

async function findAll() {
  const queryResult = await MongoTemplate.runOperation(async () => {
    return await MealEntity.find().sort({ name: "ascending" });
  });

  return queryResult.map((entry) => toDomain(entry));
}

async function findById(id: string) {
  const queryResult = await MongoTemplate.runOperation(async () => {
    return await MealEntity.findById(id);
  });

  return queryResult ? toDomain(queryResult) : undefined;
}

export const MealsRepository = {
  addMeal,
  findAll,
  findById,
};
