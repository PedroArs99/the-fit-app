import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { errorToasterHttpInterceptor } from '@shared/interceptors/error-toaster.interceptor';

export const routes: Routes = [
  {
    path: 'exercises',
    loadChildren: () => import('./modules/excercises/excercises.module').then((m) => m.ExcercisesModule),
  },
  {
    path: 'meals',
    loadChildren: () => import('./modules/meals/meals.module').then((m) => m.MealsModule),
  },
  {
    path: 'training-plans',
    loadChildren: () => import('./modules/training-plans/training-plans.module').then((m) => m.TrainingPlansModule),
  },
  {
    path: '**',
    redirectTo: 'exercises',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [errorToasterHttpInterceptor, provideHttpClient(), provideRouter(routes)],
};
