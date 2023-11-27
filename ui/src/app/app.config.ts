import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { MealsComponent } from './modules/meals/components/meals/meals.component';
import { MealDetailsComponent } from './modules/meals/components/meal-details/meal-details.component';
import { mealByIdResolver } from './modules/meals/resolvers/meal-by-id.resolver';
import { MealsRepository } from './modules/meals/services/meals-repository.service';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'meals',
    component: MealsComponent,
  },
  {
    path: 'meals/:id',
    component: MealDetailsComponent,
    resolve: {
      meal: mealByIdResolver,
    },
  },
];

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideHttpClient(), MealsRepository],
};
