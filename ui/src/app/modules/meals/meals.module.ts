import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './components/meals/meals.component';
import { MealComponent } from './components/meal/meal.component';
import { SharedModule } from '../../shared/shared.module';
import { MealsRepository } from './services/meals-repository.service';

@NgModule({
  declarations: [MealComponent, MealsComponent],
  exports: [MealComponent, MealsComponent],
  imports: [CommonModule, SharedModule],
  providers: [MealsRepository],
})
export class MealsModule {}
