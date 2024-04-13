import { Excercise } from '../../excercises/models/excercise.model';

interface Workout {
  name: string,
  excercises: Excercise[],
}

export class TrainingPlan {
  constructor(public id: number, public name: string, public workouts: Workout[]) {}
}
