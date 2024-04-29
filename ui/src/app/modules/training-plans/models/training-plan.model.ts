import { Excercise } from '../../excercises/models/excercise.model';

type Workout = {
  name: string;
  excercises: {
    series: number;
    reps: number;
    excercise: Excercise;
  }[];
};

export class TrainingPlan {
  constructor(public id: number, public name: string, public workouts: Workout[]) {}
}
