import { Component, input } from '@angular/core';
import { Workout } from '../../models/training-plan.model';

@Component({
  selector: 'tfa-workouts-grid',
  templateUrl: './workouts-grid.component.html',
  styleUrl: './workouts-grid.component.scss'
})
export class WorkoutsGridComponent {
  workouts = input.required<Workout[]>();
}
