import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExcercisesPageComponent } from './pages/excercises/excercises.component';

const routes: Routes = [
  {
    path: '',
    component: ExcercisesPageComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExcercisesModule { }
