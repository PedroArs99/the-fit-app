import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './components/meals/meals.component';
import { MealComponent } from './components/meal/meal.component';

@NgModule({
  declarations: [MealComponent, MealsComponent],
  imports: [CommonModule],
  exports: [MealComponent, MealsComponent],
})
export class MealsModule {}
