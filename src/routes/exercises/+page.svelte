<script lang="ts">
	import ExerciseCard from '$lib/exercises/components/ExerciseCard.svelte';
	import type { Exercise } from '$lib/exercises/exercise.model';
	import Icon from '$lib/Icon.svelte';

	export let data: { exercises: [string, Exercise[]][] };
</script>

<div class="categories">
	{#each data.exercises as [category, exercises]}
		<div class="category">
			<h2>{category}</h2>

			<div class="exercises">
				{#each exercises as exercise}
					<ExerciseCard exercise={exercise} />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.exercises {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: space-evenly;

		@apply gap-3;
	}

	.categories {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
