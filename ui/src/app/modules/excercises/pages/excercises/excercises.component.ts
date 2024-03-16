import { Component } from '@angular/core';
import { ExcercisesRepository } from '../../services/excercises-repository.service';

@Component({
  selector: 'tfa-excercises',
  templateUrl: './excercises.component.html',
  styleUrl: './excercises.component.scss'
})
export class ExcercisesPageComponent {
  excercises = this.excercisesRepository.getAll();

  constructor(private excercisesRepository: ExcercisesRepository){}
}
