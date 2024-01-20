import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'tfa-meal-details',
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
})
export class MealDetailsComponent {
  meal = toSignal<Meal>(this.activatedRoute.data.pipe(map(({ meal }) => meal)));

  constructor(private activatedRoute: ActivatedRoute) {}
}
