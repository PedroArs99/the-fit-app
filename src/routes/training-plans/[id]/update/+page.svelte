<script lang="ts">
	import UpdateTrainingPlanExerciseCard from '$lib/training-plans/components/UpdateTrainingPlanExerciseCard.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';

	interface Props {
		data: { trainingPlan: TrainingPlan };
	}

	let props: Props = $props();

	let { name, workouts } = props.data.trainingPlan;
</script>

<div class="training-plan">
	<h1>{name}</h1>

	<div class="workouts">
		{#each workouts as workout}
			<div class="workout">
				<h2>{workout.name}</h2>
				<div class="exercises">
					{#each workout.exercises as exercise}
						<UpdateTrainingPlanExerciseCard workoutExercise={exercise} />
					{/each}
				</div>
			</div>
      <div class="divider divider-neutral"></div>
		{/each}
	</div>
</div>

<style lang="postcss">
	.exercises {
		display: flex;

    @apply gap-3;
	}

	.workout {
		display: flex;
		flex-direction: column;

		@apply gap-3 p-3 border border-dashed border-neutral rounded-2xl;
	}

	.workouts {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
