import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsComponent } from './pages/meals/meals.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { SharedModule } from '../../shared/shared.module';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { MealsRepository } from './services/meals-repository.service';
import { RouterModule, Routes } from '@angular/router';
import { mealByIdResolver } from './resolvers/meal-by-id.resolver';

const routes: Routes = [
  {
    path: '',
    component: MealsComponent,
  },
  {
    path: ':id',
    component: MealDetailsComponent,
    resolve: mealByIdResolver,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  declarations: [MealCardComponent, MealsComponent, MealDetailsComponent],
  exports: [MealCardComponent, MealsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  providers: [MealsRepository],
})
export class MealsModule {}
