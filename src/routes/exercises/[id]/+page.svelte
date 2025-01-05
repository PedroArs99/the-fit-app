<script lang="ts">
	import LineChart from '$lib/charts/LineChart.svelte';
	import type { Exercise } from '$lib/exercises/exercise.model';

	interface Props {
		data: { exercise: Exercise };
	}

	let { data }: Props = $props();

	let diaryEntries = $derived(data.exercise.diaryEntries
		.map((e) => ({
			label: e.date,
			value: e.load
		}))
		.slice(0, 5));
</script>

<div class="exercise">
	<h1>{data.exercise.name}</h1>
	<div class="badge">{data.exercise.category}</div>

	<div class="facts">
		<p>{@html data.exercise.description}</p>
		<div class="image">
			<img src={data.exercise.image} alt={data.exercise.name} />
		</div>
	</div>

	<div class="divider"></div>

	<div class="stats">
		<h2>Diary</h2>

		<div class="diary">
			<LineChart dataPoints={diaryEntries} />
		</div>
	</div>
</div>

<style lang="postcss">
	.diary {
		@apply md:max-w-96;
	}

	.exercise {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}

	.facts {
		@apply flex flex-col md:flex-row-reverse md:justify-end gap-3;
	}

	.image {
		@apply p-3 border md:max-w-96;
	}

	.stats {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
