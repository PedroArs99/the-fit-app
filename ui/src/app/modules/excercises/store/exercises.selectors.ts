import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ExercisesState } from './exercises.state';
import { Exercise } from '../models/exercise.model';

function groupExercisesByCategory(exercises: Exercise[]): { [key: string]: Exercise[] } {
  return exercises.reduce(
    (acc, item) => {
      const categoryExercises = acc[item.category];
      if (!categoryExercises) {
        acc[item.category] = [item];
      } else {
        acc[item.category] = [...categoryExercises, item];
      }

      return acc;
    },
    {} as { [key: string]: Exercise[] },
  );
}

const exercisesFeature = createFeatureSelector<ExercisesState>('exercises');

const selectAllExercises = createSelector(exercisesFeature, (state: ExercisesState) => state.exercises);

export const selectAllExercisesGroupedByCategory = createSelector(selectAllExercises, (exercises) =>
  groupExercisesByCategory(exercises),
);

export const selectIsLoadingExercises = createSelector(exercisesFeature, (state: ExercisesState) => state.isLoading);
