import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Meal } from '../models/meal.model';
import { MealsRepository } from '../services/meals-repository.service';

export const MealByIdResolver: ResolveFn<Meal> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const mealRepository = inject(MealsRepository);

  const id = route.paramMap.get('id');

  if (!id) throw Error('Error: Id not provided');

  return mealRepository.getById(id);
};
