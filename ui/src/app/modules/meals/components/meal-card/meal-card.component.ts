import { Component, Input } from '@angular/core';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'tfa-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.scss',
})
export class MealCardComponent {
  @Input({ required: true })
  meal!: Meal;
}
