import { Exercise } from "@exercises/exercise.model";

export type Workout = {
  name: string;
  exercises: {
    series: number;
    reps: number;
    exercise: Exercise;
  }[];
};

export type TrainingPlan = {
  id: number;
  name: string;
  createdAt: Date;
  workouts: Workout[];
}
