import { createAction, props } from '@ngrx/store';
import { Exercise } from '../models/exercise.model';

export const loadExercises = createAction('[Exercise] Load Exercises');
export const loadExercisesSuccess = createAction(
  '[Exercise] Load Exercises Success',
  props<{ exercises: Exercise[] }>(),
);
export const loadExercisesFailure = createAction('[Exercise] Load Exercises Failure', props<{ error: any }>());
