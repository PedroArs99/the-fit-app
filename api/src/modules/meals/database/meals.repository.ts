import { PrismaClient } from "@prisma/client";
import { Meal } from "../models/read/meal";
import { AddMealInput } from "../models/write/add-meal";

const prisma = new PrismaClient();

async function addMeal(id: string, addMeal: AddMealInput): Promise<Meal> {
  const result = await prisma.meal.create({
    data: {
      id,
      imageUrl: addMeal.imageUrl,
      name: addMeal.name,
      nutritionalValues: addMeal.nutritionalValues,
    },
  });

  return result;
}

async function findAll(): Promise<Meal[]> {
  const meals = await prisma.meal.findMany();

  return meals;
}

async function findById(id: string): Promise<Meal | undefined> {
  const meal = await prisma.meal.findUnique({
    where: {
      id,
    },
  });

  return meal;
}

export const MealsRepository = {
  addMeal,
  findAll,
  findById,
};
