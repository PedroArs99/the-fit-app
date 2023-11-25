import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';

export const routes: Routes = [];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
