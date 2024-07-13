import { Component, input } from '@angular/core';
import { Exercise } from '../../models/exercise.model';
import { Store } from '@ngrx/store';
import { ExercisesState } from '../../store/exercises.state';
import { deleteExercise } from '../../store/exercises.actions';

@Component({
  selector: 'tfa-excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrl: './excercise-card.component.scss',
})
export class ExcerciseCardComponent {
  exercise = input.required<Exercise>();

  constructor(private store: Store<ExercisesState>) {}

  delete() {
    this.store.dispatch(deleteExercise({ exercise: this.exercise() }));
  }
}
