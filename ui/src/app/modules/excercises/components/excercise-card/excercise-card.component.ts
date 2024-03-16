import { Component, input } from '@angular/core';
import { Excercise } from '../../models/excercise.model';

@Component({
  selector: 'tfa-excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrl: './excercise-card.component.scss'
})
export class ExcerciseCardComponent {
  excercise = input.required<Excercise>()
}
