import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcercisesPageComponent } from './pages/excercises/excercises.component';
import { ExercisesDetailsPageComponent } from './pages/exercises-details/exercises-details-page.component';
import { exerciseByIdResolver } from './resolvers/exercise-by-id.resolver';

const routes: Routes = [
  {
    path: ':id',
    component: ExercisesDetailsPageComponent,
    resolve: { exercise: exerciseByIdResolver },
  },
  {
    path: '',
    component: ExcercisesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule {}
