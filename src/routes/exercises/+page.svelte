<script lang="ts">
	import ExerciseCard from '$lib/exercises/components/ExerciseCard.svelte';
	import type { Exercise } from '$lib/exercises/exercise.model';
	import { exerciseRepository } from '$lib/exercises/exercise.repository';
	import Icon from '$lib/Icon.svelte';
	import _ from 'lodash';

	export let data: { exercises: Exercise[] };

	function onExerciseDelete(event: CustomEvent) {
		exerciseRepository.delete(event.detail.id).then(() => {
			data.exercises = data.exercises.filter(e => e.id !== event.detail.id);
		});
	}

	$: groupedByCategory = Object.entries(_.groupBy(data.exercises, 'category'));
</script>

<div class="actions">
	<a href="/exercises/new" class="btn btn-primary">
		<Icon icon="plus" />
		<span>Add New</span>
	</a>
</div>

<div class="divider"></div>

<div class="categories">
	{#each groupedByCategory as [category, exercises]}
		<div class="category">
			<h2>{category}</h2>

			<div class="exercises">
				{#each exercises as exercise}
					<ExerciseCard {exercise} on:delete={onExerciseDelete} />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.actions {
		display: flex;
		flex-direction: row-reverse;
	}

	.categories {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}

	.exercises {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: space-evenly;

		@apply gap-3;
	}
</style>
