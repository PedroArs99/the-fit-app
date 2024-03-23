import { Component, input } from '@angular/core';
import { TrainingPlan } from '../../models/training-plan.model';

@Component({
  selector: 'tfa-training-plan-card',
  templateUrl: './training-plan-card.component.html',
  styleUrl: './training-plan-card.component.scss',
})
export class TrainingPlanCardComponent {
  trainingPlan = input.required<TrainingPlan>();
}
