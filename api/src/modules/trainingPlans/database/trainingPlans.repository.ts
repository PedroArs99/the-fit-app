import { strapiClient } from "src/shared/strapi-client";
import { TrainingPlan } from "../models/read/trainingPlan";
import { StrapiExcercise, mapStrapiExcerciseToDomain } from "src/modules/excercises/database/excercises.repository";

type StrapiWorkout = {
  sortId: number;
  excercises: {
    Series: number;
    Reps: number;
    excercise: {
      data: StrapiExcercise;
    };
  }[]
}

type StrapiTrainingPlan = {
  id: number;
  attributes: {
    name: string;
    workouts: StrapiWorkout[];
  };
};

async function findAll(): Promise<TrainingPlan[]> {
  const url = "training-plans?pagination[pageSize]=999&populate[0]=workouts.excercises.excercise";

  const strapiTrainingPlans = await strapiClient.get<StrapiTrainingPlan[]>(url);

  return strapiTrainingPlans.map((it) => _strapiTrainingPlanToDomain(it));
}

async function findById(id: number): Promise<TrainingPlan> {
  const url = `training-plans/${id}?populate[0]=workouts.excercises.excercise`;

  const strapiTrainingPlan = await strapiClient.get<StrapiTrainingPlan>(url);

  return _strapiTrainingPlanToDomain(strapiTrainingPlan);
}

function _strapiTrainingPlanToDomain({ id, attributes }: StrapiTrainingPlan): TrainingPlan {
  return {
    id,
    name: attributes.name,
    workouts: attributes.workouts.map((it) => ({
      name: `${it.sortId}`,
      excercises: it.excercises.map((ex) => ({
        series: ex.Series,
        reps: ex.Reps,
        excercise: mapStrapiExcerciseToDomain(ex.excercise.data),
      })),
    })),
  };
}

export const TrainingPlanRepository = {
  findAll,
  findById,
};
