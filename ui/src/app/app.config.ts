import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { MealsComponent } from './modules/meals/components/meals/meals.component';

export const routes: Routes = [
  {
    path: 'meals',
    component: MealsComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
