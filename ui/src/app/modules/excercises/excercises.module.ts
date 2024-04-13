import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExcercisesPageComponent } from './pages/excercises/excercises.component';
import { ExcerciseCardComponent } from './components/excercise-card/excercise-card.component';
import { SharedModule } from '@shared/shared.module';
import { ExcercisesRepository } from './services/excercises-repository.service';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ExcercisesPageComponent,
  }
];

@NgModule({
  declarations: [ExcerciseCardComponent, ExcercisesPageComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [ExcercisesRepository],
  exports: [ExcerciseCardComponent],
})
export class ExcercisesModule {}
