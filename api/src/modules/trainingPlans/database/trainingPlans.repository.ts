import { strapiClient } from "src/shared/strapi-client";
import { TrainingPlan } from "../models/read/trainingPlan";
import { ExcerciseRepository } from "src/modules/excercises/database/excercises.repository";
import { Excercise } from "src/modules/excercises/models/read/excercise";

type StrapiTrainingPlan = {
  id: number;
  attributes: {
    name: string;
    workouts: {
      name: string;
      excercises: string[];
    }[];
  };
};

async function findAll(): Promise<TrainingPlan[]> {
  const url = "training-plans?pagination[pageSize]=999";

  const strapiTrainingPlans = await strapiClient.get<StrapiTrainingPlan[]>(url);
  const excercises = await ExcerciseRepository.findAll();

  return strapiTrainingPlans.map((it) => _strapiTrainingPlanToDomain(it, excercises));
}

async function findById(id: number): Promise<TrainingPlan> {
  const url = `training-plans/${id}`;

  const strapiTrainingPlan = await strapiClient.get<StrapiTrainingPlan>(url);
  const excercises = await ExcerciseRepository.findAll();

  return _strapiTrainingPlanToDomain(strapiTrainingPlan, excercises);
}

function _strapiTrainingPlanToDomain({ id, attributes }: StrapiTrainingPlan, excercises: Excercise[]): TrainingPlan {
  return {
    id,
    name: attributes.name,
    workouts: attributes.workouts.map((it) => ({
      name: it.name,
      excercises: it.excercises.map((ex) => excercises.find((e) => e.keyName === ex)).filter((e) => e !== null),
    })),
  };
}

export const TrainingPlanRepository = {
  findAll,
  findById,
};
