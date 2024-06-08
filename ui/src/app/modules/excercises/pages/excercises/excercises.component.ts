import { Component, computed } from '@angular/core';
import { ExcercisesRepository } from '../../services/excercises-repository.service';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'tfa-excercises',
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss',
})
export class ExcercisesPageComponent {
  private _excercises = this.excercisesRepository.getAll();

  isLoading = this._excercises.isLoading;

  exercisesByCategory = computed(() => {
    const exercises = this._excercises.value();
    return this.groupExercisesByCategory(exercises);
  });

  constructor(private excercisesRepository: ExcercisesRepository) {}

  private groupExercisesByCategory(exercises: Exercise[]): { [key: string]: Exercise[] } {
    return exercises.reduce(
      (acc, item) => {
        const categoryExercises = acc[item.category];
        if (!categoryExercises) {
          acc[item.category] = [item];
        } else {
          acc[item.category] = [...categoryExercises, item];
        }

        return acc;
      },
      {} as { [key: string]: Exercise[] },
    );
  }
}
