import { MuscleGroup as MuscleGroupEntity, PrismaClient } from "@prisma/client";
import { AddExcerciseInput } from "../models/write/add-excercise";
import { Excercise, MuscleGroup } from "../models/read/excercise";

const prisma = new PrismaClient();

type ExcercisePrismaEntity = {
  id: string;
  imageUrl: string;
  name: string;
  muscleGroup: MuscleGroupEntity;
};

async function add(id: string, addMeal: AddExcerciseInput): Promise<Excercise> {
  const result = await prisma.excercise.create({
    data: {
      id,
      imageUrl: addMeal.imageUrl,
      name: addMeal.name,
      muscleGroup: MuscleGroupEntity[addMeal.muscleGroup],
    },
  });

  return excerciseEntityToDomain(result);
}

async function findAll(): Promise<Excercise[]> {
  const allExcercises = await prisma.excercise.findMany();

  return allExcercises.map((it) => excerciseEntityToDomain(it));
}

function excerciseEntityToDomain(excerciseEntity: ExcercisePrismaEntity): Excercise {
  return {
    id: excerciseEntity.id,
    imageUrl: excerciseEntity.imageUrl,
    name: excerciseEntity.name,
    muscleGroup: MuscleGroup[excerciseEntity.muscleGroup] as MuscleGroup,
  };
}

export const ExcerciseRepository = {
  add,
  findAll,
  toDomainMapper: excerciseEntityToDomain,
};
