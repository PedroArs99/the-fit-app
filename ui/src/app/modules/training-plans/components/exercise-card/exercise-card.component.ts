import { Component, input } from '@angular/core';
import { Exercise } from 'src/app/modules/excercises/models/exercise.model';

@Component({
  selector: 'tfa-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrl: './exercise-card.component.scss'
})
export class ExerciseCardComponent {
  exercise = input.required<Exercise>();
  series = input.required<number>();
  reps = input.required<number>();
}
