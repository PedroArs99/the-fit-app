import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExcercisesPageComponent } from './pages/excercises/excercises.component';
import { ExcerciseCardComponent } from './components/excercise-card/excercise-card.component';
import { SharedModule } from '@shared/shared.module';
import { ExcercisesRepository } from './services/excercises-repository.service';
import { ExcerciseUpsertPageComponent } from './pages/excercise-upsert-page/excercise-upsert.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ExcercisesPageComponent,
  },
  {
    path: 'new',
    component: ExcerciseUpsertPageComponent,
  },
];

@NgModule({
  declarations: [ExcerciseCardComponent, ExcercisesPageComponent, ExcerciseUpsertPageComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), SharedModule],
  providers: [ExcercisesRepository],
})
export class ExcercisesModule {}
