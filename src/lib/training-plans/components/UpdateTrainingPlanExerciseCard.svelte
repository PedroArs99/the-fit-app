<script lang="ts">
	import Icon from '$lib/ui/components/Icon.svelte';
	import type { WorkoutExercise } from '../training-plan.model';

	interface Props {
		workoutExercise: WorkoutExercise;
	}

	let { workoutExercise }: Props = $props();
	let { exercise, series, reps } = workoutExercise;
</script>

<div class="card shadow-xl">
  <div class="card-actions">
			<a href={`/exercises/${exercise.id}`} class="btn btn-sm btn-ghost">
				<Icon icon="link-new-tab" />
			</a>
		</div>
	<figure>
		<img src={exercise.image} alt={exercise.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{exercise.name}</h2>
	</div>
</div>

<style lang="postcss">
  .card-actions {
		display: flex;
		flex-direction: row-reverse;

		@apply p-1 gap-1;
	}
</style>