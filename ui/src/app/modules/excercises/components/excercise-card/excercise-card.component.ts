import { Component, input } from '@angular/core';
import { Excercise } from '../../models/excercise.model';
import { SharedModule } from '@shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'tfa-excercise-card',
  templateUrl: './excercise-card.component.html',
  styleUrl: './excercise-card.component.scss',
})
export class ExcerciseCardComponent {
  excercise = input.required<Excercise>();
}
