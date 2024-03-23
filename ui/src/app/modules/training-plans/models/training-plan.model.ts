import { Excercise } from '../../excercises/models/excercise.model';

export class TrainingPlan {
  constructor(public id: string, public name: string, public excercises: Excercise[]) {}
}
