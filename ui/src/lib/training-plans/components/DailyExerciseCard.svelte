<script lang="ts">
	import Icon from '$lib/ui/components/icons/Icon.svelte';
	import type { WorkoutExercise } from '../training-plan.model';
	import { toShortDate } from '$lib/utils/date.utils';
	import { exerciseRepository } from '$lib/exercises/exercise.repository';

	interface Props {
		workoutExercise: WorkoutExercise;
	}

	let { workoutExercise }: Props = $props();

	let exercise = $state(workoutExercise.exercise);
	let { series, reps } = workoutExercise;

	let today = toShortDate(new Date());
	let isTodayAlreadyRegistered = $derived(
		exercise.diaryEntries.find((entry) => entry.date === today)
	);
	let todaysLoad: string | undefined = $state(undefined);

	let isSaving = $state(false);

	async function registerNewEntry() {
		if (todaysLoad) {
			isSaving = true;

			exerciseRepository
				.registerNewDiaryEntry(exercise.id, {
					date: today,
					load: Number.parseFloat(todaysLoad)
				})
				.then((result) => {
					exercise = result;
					isSaving = false;
				});

			todaysLoad = undefined;
		}
	}
</script>

<div class="card md:max-w-64">
	<div class="card-actions">
		<a href={`/exercises/${exercise.id}`} class="btn btn-sm btn-ghost">
			<Icon icon="link-new-tab" />
		</a>
	</div>

	<figure>
		{#if exercise.image}
			<img src={exercise.image} alt={exercise.name} />
		{:else}
			<Icon icon="dumbbell" size="3x" />
		{/if}
	</figure>

	<div class="card-body">
		<h2 class="card-title">{exercise.name}</h2>

		<div class="badges">
			<span class="badge badge-primary">{series} x {reps === 0 ? 'Limit' : reps}</span>
		</div>

		<div class="divider divider-primary"></div>
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
					{#each exercise.diaryEntries as entry}
						<tr>
							<td class="font-bold">{entry.date}</td>
							<td>{entry.load}</td>
						</tr>
					{/each}

					{#if !isTodayAlreadyRegistered}
						<tr>
							<td class="font-bold">{today}</td>
							<td class="font-bold">
								<input
									type="number"
									placeholder="Today's load..."
									class="input input-xs max-w-32"
									onchange={(event) => (todaysLoad = event.currentTarget?.value)}
								/>
								{#if isSaving}
									<Icon icon="dumbbell" spin />
								{/if}
							</td>
						</tr>
					{/if}
				</tbody>
			</table>

			{#if !isTodayAlreadyRegistered}
				<button class="btn btn-primary btn-sm" disabled={!todaysLoad} onclick={registerNewEntry}>
					Save
				</button>
			{/if}
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
