import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  {
    path: 'body',
    loadChildren: () => import('./modules/body/body.module').then((m) => m.BodyModule),
  },
  {
    path: '**',
    redirectTo: 'body',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()],
};
