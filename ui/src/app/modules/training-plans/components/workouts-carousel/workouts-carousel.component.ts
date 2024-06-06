import { Component, computed, input, signal } from '@angular/core';
import { Workout } from '../../models/training-plan.model';

@Component({
  selector: 'tfa-workouts-carousel',
  templateUrl: './workouts-carousel.component.html',
  styleUrl: './workouts-carousel.component.scss',
})
export class WorkoutsCarouselComponent {
  workouts = input.required<Workout[]>();

  index = signal(0);
  activeWorkout = computed(() => this.workouts()[this.index()]);

  nextWorkout() {
    this.index.update((current) => ++current);
  }

  prevWorkout() {
    this.index.update((current) => --current);
  }
}
