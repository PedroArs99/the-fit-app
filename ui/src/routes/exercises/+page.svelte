<script lang="ts">
	import { run } from 'svelte/legacy';

	import ExcerciseCategoryPicker from '$lib/exercises/components/ExcerciseCategoryPicker.svelte';
	import ExerciseCard from '$lib/exercises/components/ExerciseCard.svelte';
	import type { Exercise } from '$lib/exercises/exercise.model';
	import { exerciseRepository } from '$lib/exercises/exercise.repository';
	import Icon from '$lib/ui/components/icons/Icon.svelte';
	import { groupBy } from '$lib/utils/collections';

	interface Props {
		data: { exercises: Exercise[] };
	}

	let { data = $bindable() }: Props = $props();

	function onCategoryFilterChange(event: CustomEvent<{ category?: string }>) {		
		const categorySelected = event.detail.category;

		if (!categorySelected) {
			exercises = data.exercises;
		} else {
			exercises = data.exercises.filter((it) => it.category === categorySelected);
		}
	}

	function onExerciseDelete(event: CustomEvent) {
		exerciseRepository.delete(event.detail.id).then(() => {
			data.exercises = data.exercises.filter((e) => e.id !== event.detail.id);
		});
	}

	let exercises;
	run(() => {
		exercises = data.exercises;
	});
	let groupedByCategory = $derived(groupBy(exercises, 'category'))
</script>

<div class="actions">
	<div class="filters">
		<ExcerciseCategoryPicker on:change={onCategoryFilterChange} />
	</div>

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
		align-items: flex-end;
		justify-content: space-between;
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

	.filters {
		flex-grow: 1;
	}
</style>
