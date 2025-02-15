import type { Exercise } from '$lib/exercises/exercise.model';

export interface WorkoutExercise {
	exercise: Exercise;
	series: number;
	reps: number;
}

export interface Workout {
	name: string;
	sort: number;
	exercises: WorkoutExercise[];
}

export interface TrainingPlan {
	id: string;
	createdAt: string;
	name: string;
	workouts: Workout[];
}
