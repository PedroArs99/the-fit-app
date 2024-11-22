<script lang="ts">
	import { browser } from '$app/environment';
	import Icon from '$lib/ui/components/Icon.svelte';
	import ExerciseCard from '$lib/training-plans/components/ExerciseCard.svelte';
	import type { TrainingPlan, Workout } from '$lib/training-plans/training-plan.model';

	export let data: { activeWorkoutIdx: number; trainingPlan: TrainingPlan };

	function nextWorkout() {
		if (data.activeWorkoutIdx + 1 < workouts.length) {
			data.activeWorkoutIdx += 1;
		}
	}

	function previousWorkout() {
		if (data.activeWorkoutIdx > 0) {
			data.activeWorkoutIdx -= 1;
		}
	}

	function synchronizeSearchParams(activeWorkout: string) {
		if(browser) {
			// Create a new URLSearchParams object from the current URL
			let params = new URLSearchParams(window.location.search);
	
			// Add or update the query parameters
			params.set('activeWorkout', activeWorkout);
	
			// Update the browser's URL without reloading the page
			const newUrl = `${window.location.pathname}?${params.toString()}`;
			window.history.pushState({}, '', newUrl);
		}
	}

	$: workouts = data.trainingPlan.workouts;
	$: activeWorkout = data.trainingPlan.workouts[data.activeWorkoutIdx] as Workout;
	$: synchronizeSearchParams(`${data.activeWorkoutIdx}`);
</script>

<div class="training-plan">
	<h1>{data.trainingPlan.name}</h1>

	<div class="active-workout">
		<div class="workout-switcher">
			<button
				class="btn btn-ghost btn-outline"
				disabled={data.activeWorkoutIdx === 0}
				on:click={previousWorkout}
			>
				<Icon icon="chevron-left" />
			</button>
			<h2>{activeWorkout.name}</h2>
			<button
				class="btn btn-ghost btn-outline"
				disabled={data.activeWorkoutIdx === workouts.length - 1}
				on:click={nextWorkout}
			>
				<Icon icon="chevron-right" />
			</button>
		</div>

		<div class="exercises">
			{#each activeWorkout.exercises as exercise}
				<ExerciseCard {exercise} />
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
