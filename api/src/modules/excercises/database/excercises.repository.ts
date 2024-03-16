import {PrismaClient } from "@prisma/client";
import { AddExcerciseInput } from "../models/write/add-excercise";

const prisma = new PrismaClient();

async function add(id: string, addMeal: AddExcerciseInput): Promise<Excercise> {
  const result = await prisma.excercise.create({
    data: {
      id,
      imageUrl: addMeal.imageUrl,
      name: addMeal.name,
    },
  });

  return result;
}

async function findAll(): Promise<Excercise[]> {
  const allExcercises = await prisma.excercise.findMany();

  return allExcercises;
}

export const ExcerciseRepository = {
  add,
  findAll,
};
