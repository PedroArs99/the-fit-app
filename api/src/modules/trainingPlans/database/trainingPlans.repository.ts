import { Excercise, PrismaClient } from "@prisma/client";
import { ExcerciseRepository } from "src/modules/excercises/database/excercises.repository";

const prisma = new PrismaClient();

type TrainingPlanPrismaEntity = {
  id: string;
  excercises: Excercise[];
  name: string;
};

async function findAll(): Promise<TrainingPlan[]> {
  const allTrainingPlans = await prisma.trainingPlan.findMany({
    include: {
      excercises: true,
    },
  });

  return allTrainingPlans.map((it) => trainingPlanEntityToDomain(it));
}

async function findById(id: string): Promise<TrainingPlan> {
  const trainingPlan = await prisma.trainingPlan.findUnique({
    where: {
      id
    },
    include: {
      excercises: true,
    },
  });

  return trainingPlanEntityToDomain(trainingPlan);
}

function trainingPlanEntityToDomain(trainingPlan: TrainingPlanPrismaEntity): TrainingPlan {
  return {
    id: trainingPlan.id,
    name: trainingPlan.name,
    excercises: trainingPlan.excercises.map((it) => ExcerciseRepository.toDomainMapper(it)),
  };
}

export const TrainingPlanRepository = {
  findAll,
  findById,
};
