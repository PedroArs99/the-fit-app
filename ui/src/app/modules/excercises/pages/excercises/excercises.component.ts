import { Component } from '@angular/core';
import { ExercisesState } from '../../store/exercises.state';
import { Store } from '@ngrx/store';
import { selectAllExercisesGroupedByCategory, selectIsLoadingExercises } from '../../store/exercises.selectors';

@Component({
  selector: 'tfa-excercises',
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss',
})
export class ExcercisesPageComponent {
  isLoading = this.store.selectSignal(selectIsLoadingExercises);
  exercisesByCategory = this.store.selectSignal(selectAllExercisesGroupedByCategory);

  constructor(private store: Store<ExercisesState>) {}
}
