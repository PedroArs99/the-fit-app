import { effect, inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ExercisesRepository } from '../services/exercises-repository.service';
import { Exercise } from '../models/exercise.model';
import { toObservable } from '@angular/core/rxjs-interop';

export const exerciseByIdResolver: ResolveFn<Exercise | undefined> = (route) => {
  const repo = inject(ExercisesRepository);

  const id = route.paramMap.get('id');

  if (!id) throw Error('Error: Id not provided');

  const exercise = repo.getById(parseInt(id));

  return toObservable(exercise.value);
};
