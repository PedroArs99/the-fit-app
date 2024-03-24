import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TrainingPlansRepository } from '../services/training-plans-repository.service';
import { TrainingPlan } from '../models/training-plan.model';

export const trainingPlanByIdResolver: ResolveFn<TrainingPlan> = (route, state) => {
  const trainingPlanRepository = inject(TrainingPlansRepository);

  const id = route.paramMap.get('id');

  if (!id) throw Error('Error: Id not provided');

  return trainingPlanRepository.getById(id);
};
