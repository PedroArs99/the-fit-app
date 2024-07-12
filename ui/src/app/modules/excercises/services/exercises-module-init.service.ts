import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExercisesState } from '../store/exercises.state';
import { loadExercises } from '../store/exercises.actions';

@Injectable({
  providedIn: 'root',
})
export class ExercisesModuleInitService {
  private static initialized = false;

  constructor(private store: Store<ExercisesState>) {
    if (!ExercisesModuleInitService.initialized) {
      this.init();
      ExercisesModuleInitService.initialized = true;
    }
  }

  private init() {
    this.store.dispatch(loadExercises());
  }
}
