import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { MealsComponent } from './modules/meals/components/meals/meals.component';
import { MealDetailsComponent } from './modules/meals/components/meal-details/meal-details.component';
import { mealByIdResolver } from './modules/meals/resolvers/meal-by-id.resolver';
import { MealsRepository } from './modules/meals/services/meals-repository.service';
import { provideHttpClient } from '@angular/common/http';
import { BodyDashboardComponent } from './modules/body/pages/body-dashboard/body-dashboard.component';
import path from 'path';

export const routes: Routes = [
  {
    path: 'body',
    component: BodyDashboardComponent,
  },
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
  {
    path: '**',
    redirectTo: 'body',
  }
];

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideHttpClient(), MealsRepository],
};
