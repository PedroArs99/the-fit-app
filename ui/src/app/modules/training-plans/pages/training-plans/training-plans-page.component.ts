import { Component } from '@angular/core';
import { TrainingPlansRepository } from '../../services/training-plans-repository.service';

@Component({
  selector: 'tfa-training-plans-page',
  templateUrl: './training-plans-page.component.html',
  styleUrl: './training-plans-page.component.scss',
})
export class TrainingPlansPageComponent {
  trainingPlans = this.trainingPlansRepository.getAll();

  constructor(private trainingPlansRepository: TrainingPlansRepository) {}
}
