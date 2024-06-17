import { Exercise } from '../../excercises/models/exercise.model';

export type Workout = {
  name: string;
  exercises: {
    series: number;
    reps: number;
    exercise: Exercise;
  }[];
};

export class TrainingPlan {
  constructor(
    public id: number,
    public name: string,
    public workouts: Workout[],
  ) {}
}
