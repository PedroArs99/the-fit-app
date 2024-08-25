import type { Exercise } from '$lib/exercises/exercise.model';

export interface Workout {
	name: string;
	sort: string;
	exercises: Exercise[];
}

export interface TrainingPlan {
	id: string;
	createdAt: string;
	name: string;
	workouts: Workout[];
}
