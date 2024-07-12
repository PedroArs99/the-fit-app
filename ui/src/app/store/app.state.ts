import { ExercisesState } from "../modules/excercises/store/exercises.state";

export interface AppState {
  exercises?: ExercisesState;
}