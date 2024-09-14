<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { fade } from 'svelte/transition';
	import type { WorkoutExercise } from '../training-plan.model';
	import { _textX } from 'chart.js/helpers';

	export let exercise: WorkoutExercise;

	$: _exercise = exercise.exercise;
	$: series = exercise.series;
	$: reps = exercise.reps;
</script>

<div out:fade class="card md:max-w-56">
	<div class="card-actions">
		<a href={`/exercises/${_exercise.id}`} class="btn btn-sm btn-ghost">
			<Icon icon="link-new-tab" />
		</a>
	</div>

	<figure>
		{#if _exercise.image}
			<img src={_exercise.image} alt={_exercise.name} />
		{:else}
			<Icon icon="dumbbell" size="3x" />
		{/if}
	</figure>

	<div class="card-body">
		<h2 class="card-title">{_exercise.name}</h2>

		<div class="badges">
			<span class="badge">{series} x {reps === 0 ? 'Limit' : reps}</span>
		</div>

		<div class="divider"></div>

		<div class="diary">
			<h3>Dirary Entries:</h3>
			<table class="table table-sm">
				<thead>
					<tr>
						<th>Date</th>
						<th>Load</th>
					</tr>
				</thead>
				<tbody>
					{#each _exercise.diaryEntries as entry}
						<tr>
							<td class="font-bold">{entry.date}</td>
							<td class="font-bold">{entry.load}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style lang="postcss">
	.card-actions {
		display: flex;
		flex-direction: row-reverse;

		@apply p-1 gap-1;
	}

	.diary {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
