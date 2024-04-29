import { Component, computed, input } from '@angular/core';
import { Excercise } from '../../models/excercise.model';
import { SharedModule } from '@shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'tfa-excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrl: './excercise-card.component.scss',
})
export class ExcerciseCardComponent {
  excercise = input.required<Excercise>();
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
