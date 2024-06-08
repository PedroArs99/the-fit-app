import { Exercise } from '../../excercises/models/exercise.model';

export type Workout = {
  name: string;
  excercises: {
    series: number;
    reps: number;
    excercise: Exercise;
  }[];
};

export class TrainingPlan {
  constructor(
    public id: number,
    public name: string,
    public workouts: Workout[],
  ) {}
}
