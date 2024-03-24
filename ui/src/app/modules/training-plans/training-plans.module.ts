import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingPlansPageComponent } from './pages/training-plans/training-plans-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { TrainingPlansRepository } from './services/training-plans-repository.service';
import { TrainingPlanCardComponent } from './components/training-plan-card/training-plan-card.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingPlansPageComponent,
  },
];

@NgModule({
  declarations: [TrainingPlansPageComponent, TrainingPlanCardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [TrainingPlansRepository],
})
export class TrainingPlansModule {}
