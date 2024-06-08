import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExcercisesPageComponent } from './pages/excercises/excercises.component';
import { ExcerciseCardComponent } from './components/excercise-card/excercise-card.component';
import { SharedModule } from '@shared/shared.module';
import { ExercisesRepository } from './services/exercises-repository.service';
import { ReactiveFormsModule } from '@angular/forms';
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
  declarations: [ExcercisesPageComponent, ExercisesDetailsPageComponent],
  imports: [CommonModule, ExcerciseCardComponent, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [ExercisesRepository],
})
export class ExcercisesModule {}
