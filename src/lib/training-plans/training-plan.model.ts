export interface Workout {
	name: string;
	sort: string;
}

export interface TrainingPlan {
	id: string;
	createdAt: string;
	name: string;
	workouts: Workout[];
}
