import { Component, Input } from '@angular/core';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'tfa-meal',
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent {
  @Input({ required: true })
  meal!: Meal;
}
