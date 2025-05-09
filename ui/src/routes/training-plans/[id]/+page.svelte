<script lang="ts">
	import Icon from '$lib/ui/components/icons/Icon.svelte';
	import DailyExerciseCard from '$lib/training-plans/components/DailyExerciseCard.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';
	import { pushState } from '$app/navigation';
	import Page from '$lib/ui/components/Page.svelte';

	interface Props {
		data: { activeWorkoutIdx: number; trainingPlan: TrainingPlan };
	}

	let props: Props = $props();

	let trainingPlan = props.data.trainingPlan;
	let workouts = trainingPlan.workouts;

	let activeWorkoutIdx = $state(props.data.activeWorkoutIdx);
	let activeWorkout = $derived(workouts[activeWorkoutIdx]);

	function nextWorkout() {
		if (activeWorkoutIdx + 1 < workouts.length) {
			activeWorkoutIdx += 1;
			synchronizeSearchParams(activeWorkoutIdx);
		}
	}

	function previousWorkout() {
		if (activeWorkoutIdx > 0) {
			activeWorkoutIdx -= 1;
		}
	}

	function synchronizeSearchParams(activeWorkoutIdx: number) {
		// Create a new URLSearchParams object from the current URL
		let params = new URLSearchParams(window.location.search);

		// Add or update the query parameters
		params.set('activeWorkout', activeWorkoutIdx.toString());

		// Update the browser's URL without reloading the page
		const newUrl = `${window.location.pathname}?${params.toString()}`;
		pushState(newUrl, {});
	}
</script>

<Page title={trainingPlan.name}>

	<div class="active-workout">
		<div class="workout-switcher">
			<button
				class="btn btn-ghost btn-outline"
				disabled={activeWorkoutIdx === 0}
				onclick={previousWorkout}
			>
				<Icon icon="chevron-left" />
			</button>
			<h2>{activeWorkout.name}</h2>
			<button
				class="btn btn-ghost btn-outline"
				disabled={activeWorkoutIdx === workouts.length - 1}
				onclick={nextWorkout}
			>
				<Icon icon="chevron-right" />
			</button>
		</div>

		<div class="exercises">
			{#each activeWorkout.exercises as exercise (exercise.exercise.id)}
				<DailyExerciseCard workoutExercise={exercise} />
			{/each}
		</div>
	</div>
</Page>

<style lang="postcss">
	.active-workout {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}

	.exercises {
		@apply flex flex-col md:flex-row gap-3;
	}
	
	.workout-switcher {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
