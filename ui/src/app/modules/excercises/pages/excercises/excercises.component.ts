import { Component, computed, signal } from '@angular/core';
import { ExercisesState } from '../../store/exercises.state';
import { Store } from '@ngrx/store';
import { selectAllExercisesGroupedByCategory, selectIsLoadingExercises } from '../../store/exercises.selectors';
import { Category } from '../../models/exercise.model';

@Component({
  selector: 'tfa-excercises',
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss',
})
export class ExcercisesPageComponent {
  private exercisesByCategory = this.store.selectSignal(selectAllExercisesGroupedByCategory);
  private selectedCategory = signal<Category | undefined>(undefined);
  
  categories = Object.values(Category);
  isLoading = this.store.selectSignal(selectIsLoadingExercises);
  exercises = computed(() => {
    const category = this.selectedCategory();
    console.log(category);
    const exercisesByCategory = this.exercisesByCategory();

    if (category) {
      return { [category]: exercisesByCategory[category]}
    } else {
      return exercisesByCategory;
    }
  });


  constructor(private store: Store<ExercisesState>) {}

  selectCategory(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;

    this.selectedCategory.set(target.value !== "undefined" ? target.value as Category : undefined);
  }
}
