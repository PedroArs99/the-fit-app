import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'excercises',
    loadChildren: () => import('./modules/excercises/excercises.module').then((m) => m.ExcercisesModule),
  },
  {
    path: 'meals',
    loadChildren: () => import('./modules/meals/meals.module').then((m) => m.MealsModule),
  },
  {
    path: '**',
    redirectTo: 'meals',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
