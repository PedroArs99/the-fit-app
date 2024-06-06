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

const components = [
  TrainingPlanCardComponent,
  TrainingPlanDetailsPageComponent,
  TrainingPlansPageComponent,
  WorkoutsGridComponent,
];

const routes: Routes = [
  {
    path: '',
    component: TrainingPlansPageComponent,
  },
  {
    path: ':id',
    component: TrainingPlanDetailsPageComponent,
    resolve: { trainingPlan: trainingPlanByIdResolver },
  },
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ExcerciseCardComponent, RouterModule.forChild(routes), SharedModule],
  providers: [TrainingPlansRepository],
})
export class TrainingPlansModule {}
