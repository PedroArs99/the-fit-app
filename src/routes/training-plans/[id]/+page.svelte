<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import ExerciseCard from '$lib/training-plans/components/ExerciseCard.svelte';
	import type { TrainingPlan, Workout } from '$lib/training-plans/training-plan.model';

	export let data: { trainingPlan: TrainingPlan };
	let activeWorkoutIdx: number = 0;

	$: activeWorkout = data.trainingPlan.workouts[activeWorkoutIdx] as Workout;
</script>

<div class="training-plan">
	<h1>{data.trainingPlan.name}</h1>

	<div class="active-workout">
		<div class="workout-switcher">
			<button class="btn btn-ghost btn-outline btn-disabled">
				<Icon icon="chevron-left" />
			</button>
			<h2>{activeWorkout.name}</h2>
			<button class="btn btn-ghost btn-outline btn-disabled">
				<Icon icon="chevron-right" />
			</button>
		</div>

		<div class="exercises">
			{#each activeWorkout.exercises as exercise}
				<ExerciseCard exercise={exercise} />
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.active-workout {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}

	.exercises {
		@apply flex flex-col md:flex-row gap-3;
	}

	.training-plan {
		display: flex;
		flex-direction: column;
		
		@apply gap-3;
	}
	
	.workout-switcher {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
