import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingPlansPageComponent } from './pages/training-plans-page/training-plans-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrainingPlansPageComponent,
  }
]

@NgModule({
  declarations: [
    TrainingPlansPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TrainingPlansModule { }
