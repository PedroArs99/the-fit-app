import { Component } from '@angular/core';
import { MealsRepository } from '../../services/meals-repository.service';

@Component({
  selector: 'tfa-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {
  meals = this.mealsRepository.getAll();

  constructor(private mealsRepository: MealsRepository){}
}
