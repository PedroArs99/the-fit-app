import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './components/meals/meals.component';

@NgModule({
  declarations: [MealsComponent],
  imports: [CommonModule],
  exports: [MealsComponent],
})
export class MealsModule {}
