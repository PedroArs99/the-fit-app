import { Exercise } from "../models/exercise.model";

export interface ExercisesState {
  error: any;
  exercises: Exercise[];
  isLoading: boolean;
}