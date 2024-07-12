import { Component, computed, input } from '@angular/core';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'tfa-excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrl: './excercise-card.component.scss',
})
export class ExcerciseCardComponent {
  excercise = input.required<Exercise>();
  series = input<number>();
  reps = input<number>();

  seriesXrepsBadge = computed(() => {
    const series = this.series();
    const reps = this.reps();

    if (series && reps) {
      return `${series}x${reps}`;
    } else if (series) {
      return `${series} to Failure`;
    } else {
      return null;
    }
  });
}
