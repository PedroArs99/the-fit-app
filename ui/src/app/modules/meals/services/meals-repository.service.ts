import { Injectable, Signal, signal } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Signalizable } from '../../../shared/models/signalizable.model';

const mockMeals: Array<Meal> = [
  {
    name: 'Fried rice with beef',
    imageUrl: 'https://the-fit-app-ui-food-images.s3.eu-central-1.amazonaws.com/fried+rice+with+beef.webp',
  },
];

@Injectable({
  providedIn: 'root',
})
export class MealsRepository {
  constructor() {}

  getAll(): Signalizable<Meal[]> {
    const isLoading = signal(true);
    const meals = signal<Array<Meal>>([]);

    setTimeout(() => {
      isLoading.set(false);
      meals.set(mockMeals);
    }, 2000);

    return {
      isLoading,
      value: meals,
    };
  }
}
