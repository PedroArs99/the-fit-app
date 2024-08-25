<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';

	export let data: { trainingPlan: TrainingPlan };
	let activeWorkoutIdx: number = 0;

	$: activeWorkout = data.trainingPlan.workouts[activeWorkoutIdx];
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
	</div>
</div>

<style lang="postcss">
	.workout-switcher {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.training-plan {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
