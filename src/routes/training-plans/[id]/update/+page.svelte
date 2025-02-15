<script lang="ts">
	import UpdateTrainingPlanExerciseCard from '$lib/training-plans/components/UpdateTrainingPlanExerciseCard.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';
	import { trainingPlanRepository } from '$lib/training-plans/training-plan.repository';
	import Icon from '$lib/ui/components/Icon.svelte';
	import Page from '$lib/ui/components/Page.svelte';

	interface Props {
		data: { trainingPlan: TrainingPlan };
	}

	let props: Props = $props();

	let { name, workouts } = $state(props.data.trainingPlan);

	function newWorkout() {
		
	}
</script>

{#snippet actions()}
	<button class="btn btn-primary" onclick={newWorkout}>
		<Icon icon="plus" />
		<span>New Workout</span>
	</button>
{/snippet}

<Page title={name} {actions}>
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
</Page>

<style lang="postcss">
	.exercises {
		display: flex;

		@apply gap-3;
	}

	.workout {
		display: flex;
		flex-direction: column;

		overflow: auto;

		@apply gap-3 p-3 border border-dashed border-neutral rounded-2xl;
	}

	.workouts {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
