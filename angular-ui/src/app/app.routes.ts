import { Routes } from '@angular/router';
import { HomePageComponent } from './home/pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent,
        title: 'The Fit App - Home'
    },
    {
        path: 'running',
        loadChildren: () => import('./running/running.module').then(m => m.RunningModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
