import { createReducer, on } from '@ngrx/store';
import { ExercisesState } from './exercises.state';
import { deleteExercise, loadExercisesFailure, loadExercisesSuccess } from './exercises.actions';

const initialState: ExercisesState = {
  error: undefined,
  exercises: [],
  isLoading: true,
};

export const exercisesReducer = createReducer(
  initialState,

  on(deleteExercise, (state, { exercise }) => ({
    ...state,
    exercises: state.exercises.filter(e => e.id !== exercise.id)
  })),

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
