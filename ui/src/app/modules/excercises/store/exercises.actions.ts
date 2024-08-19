import { createAction, props } from '@ngrx/store';
import { DiaryEntry, Exercise } from '../models/exercise.model';

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

export const saveDiaryEntry = createAction('[Exercise] Save Diary Entry', props<{ exerciseId: number, entry: DiaryEntry }>())
export const saveDiaryEntrySuccess = createAction('[Exercise] Save Diary Entry Success', props<{ exercise: Exercise }>());
export const saveDiaryEntryFailure = createAction('[Exercise] Save Diary Entry Failure', props<{ error: any }>());
