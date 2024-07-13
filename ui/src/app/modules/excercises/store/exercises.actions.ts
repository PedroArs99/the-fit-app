import { createAction, props } from '@ngrx/store';
import { Exercise } from '../models/exercise.model';

export const deleteExercise = createAction('[Exercise] Delete Exercise', props<{ exercise: Exercise }>());
export const deleteExerciseSuccess = createAction('[Exercise] Delete Exercise Sucess');
export const deleteExerciseFailure = createAction(
  '[Exercise] Delete Exercise Failure',
  props<{ exercise: Exercise; error: any }>(),
);

export const loadExercises = createAction('[Exercise] Load Exercises');
export const loadExercisesSuccess = createAction(
  '[Exercise] Load Exercises Success',
  props<{ exercises: Exercise[] }>(),
);
export const loadExercisesFailure = createAction('[Exercise] Load Exercises Failure', props<{ error: any }>());
