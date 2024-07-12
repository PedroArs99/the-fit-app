import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { loadExercises, loadExercisesFailure, loadExercisesSuccess } from './exercises.actions';
import { ExercisesRepository } from '../services/exercises-repository.service';

@Injectable()
export class ExercisesEffects {
  loadExercises$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadExercises),
      exhaustMap(() =>
        this.exercisesRepository.getAll().pipe(
          map((exercises) => loadExercisesSuccess({ exercises })),
          catchError((error) => of(loadExercisesFailure({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private exercisesRepository: ExercisesRepository,
  ) {}
}
