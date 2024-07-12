import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { errorToasterHttpInterceptor } from '@shared/interceptors/error-toaster.interceptor';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

export const routes: Routes = [
  {
    path: 'exercises',
    loadChildren: () => import('./modules/excercises/exercises-lazy.module').then((m) => m.ExerciseLazyModule),
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
  providers: [
    errorToasterHttpInterceptor,
    provideHttpClient(),
    provideRouter(routes),
    importProvidersFrom(EffectsModule.forRoot({}), StoreModule.forRoot({})),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
