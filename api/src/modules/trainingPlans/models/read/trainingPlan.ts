import { Excercise } from "src/modules/excercises/models/read/excercise";


type Workout = {
  name: string,
  excercises: Excercise[],
}

export type TrainingPlan = {
  id: number;
  name: string;
  workouts: Workout[];
}