import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingPlansPageComponent } from './pages/training-plans/training-plans-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TrainingPlansRepository } from './services/training-plans-repository.service';
import { TrainingPlanCardComponent } from './components/training-plan-card/training-plan-card.component';
import { TrainingPlanDetailsPageComponent } from './pages/training-plan-details/training-plan-details-page.component';
import { trainingPlanByIdResolver } from './resolvers/training-plan-by-id.resolver';
import { ExcerciseCardComponent } from '../excercises/components/excercise-card/excercise-card.component';
import { WorkoutsGridComponent } from './components/workouts-grid/workouts-grid.component';
import { WorkoutsCarouselComponent } from './components/workouts-carousel/workouts-carousel.component';
import { NewTrainingPlanButtonComponent } from './components/new-training-plan-button/new-training-plan-button.component';
import { UpsertTrainingPlanPageComponent } from './pages/upsert-training-plan-page/upsert-training-plan-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExercisesRepository } from '../excercises/services/exercises-repository.service';

const components = [
  NewTrainingPlanButtonComponent,
  TrainingPlanCardComponent,
  TrainingPlanDetailsPageComponent,
  TrainingPlansPageComponent,
  WorkoutsCarouselComponent,
  WorkoutsGridComponent,
];

const routes: Routes = [
  {
    path: '',
    component: TrainingPlansPageComponent,
  },
  {
    path: 'new',
    component: UpsertTrainingPlanPageComponent,
  },
  {
    path: ':id',
    component: TrainingPlanDetailsPageComponent,
    resolve: { trainingPlan: trainingPlanByIdResolver },
  },
];

@NgModule({
  declarations: [...components, UpsertTrainingPlanPageComponent],
  imports: [CommonModule, ExcerciseCardComponent, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [ExercisesRepository, TrainingPlansRepository],
})
export class TrainingPlansModule {}
