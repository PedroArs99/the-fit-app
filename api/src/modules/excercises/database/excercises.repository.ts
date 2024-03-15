import {PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function findAll(): Promise<Excercise[]> {
  const allExcercises = await prisma.excercise.findMany();

  return allExcercises;
}

export const ExcerciseRepository = {
  findAll,
};
