import mongoose from "mongoose";
import { TrainingPlan, Workout } from "./training-plan.model";
import { CrudRepository } from "../common/interfaces/crud-repository.interface";

type WorkoutMongoModel = {
  name: string;
  exercises: {
    series: number;
    reps: number;
    exercise: number;
  }[];
};

type TrainingPlanMongoModel = {
  id: number;
  name: string;
  createdAt: Date;
  workouts: WorkoutMongoModel[];
};

const workoutSchema = new mongoose.Schema<WorkoutMongoModel>({
  name: String,
  exercises: [
    {
      series: Number,
      reps: Number,
      exercise: Number,
    },
  ],
});

const trainingPlanSchema = new mongoose.Schema<TrainingPlanMongoModel>({
  id: Number,
  name: String,
  createdAt: Date,
  workouts: [workoutSchema],
});

const TrainingPlan = mongoose.model<TrainingPlanMongoModel>(
  "TrainingPlan",
  trainingPlanSchema
);

function _mapToDomain(model: TrainingPlanMongoModel): TrainingPlan {
  return {
    id: model.id,
    name: model.name,
    createdAt: model.createdAt,
    workouts: model.workouts as unknown as Workout[],
  };
}

function _mapToMongoModel(domain: TrainingPlan): TrainingPlanMongoModel {
  return {
    id: domain.id,
    name: domain.name,
    createdAt: domain.createdAt,
    workouts: domain.workouts.map((w) => ({
      name: w.name,
      exercises: w.exercises.map((e) => ({
        series: e.series,
        reps: e.reps,
        exercise: e.exercise.id,
      })),
    })),
  };
}

class TrainingPlanRepository implements CrudRepository<TrainingPlan> {
  async create(trainingPlan: TrainingPlan): Promise<TrainingPlan> {
    const mongoModel = _mapToMongoModel(trainingPlan);

    const result = await TrainingPlan.create(mongoModel);
    await result.populate({
      path: "workouts.exercises.exercise",
      model: "Exercise",
      foreignField: "id",
    });

    return _mapToDomain(result);
  }

  async findAll(): Promise<TrainingPlan[]> {
    const results = await TrainingPlan.find().exec();

    return results.map((it) => _mapToDomain(it));
  }

  async findById(id: number): Promise<TrainingPlan> {
    const results = await TrainingPlan.find({ id })
      .populate({
        path: "workouts.exercises.exercise",
        model: "Exercise",
        foreignField: "id",
      })
      .exec();

    if (results.length !== 1) {
      return undefined;
    }

    return _mapToDomain(results[0]);
  }
}

export const trainingPlanRepository = new TrainingPlanRepository();
