import { createReducer, on } from '@ngrx/store';
import { ExercisesState } from './exercises.state';
import { loadExercisesFailure, loadExercisesSuccess } from './exercises.actions';

const initialState: ExercisesState = {
  error: undefined,
  exercises: [],
  isLoading: true,
};

export const exercisesReducer = createReducer(
  initialState,

  on(loadExercisesSuccess, (state, { exercises }) => ({
    ...state,
    exercises,
    isLoading: false,
  })),
  
  on(loadExercisesFailure, (state, { error }) => ({
    ...state,
    error,
    exercises: [],
    isLoading: false,
  })),
);
