import { Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TrainingPlan } from '../../models/training-plan.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'tfa-training-plan-details-page',
  templateUrl: './training-plan-details-page.component.html',
  styleUrl: './training-plan-details-page.component.scss',
})
export class TrainingPlanDetailsPageComponent {
  trainingPlan = toSignal<TrainingPlan>(this.activatedRoute.data.pipe(map(({ trainingPlan }) => trainingPlan)));

  constructor(private activatedRoute: ActivatedRoute) {}
}
