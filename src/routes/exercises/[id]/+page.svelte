<script lang="ts">
	import type { Exercise } from '$lib/exercises/exercise.model';

	export let data: { exercise: Exercise };
</script>

<div class="exercise">
	<h1>{data.exercise.name}</h1>
	<div class="badge">{data.exercise.category}</div>

	<div class="facts">
	
		<p>{@html data.exercise.description}</p>
	
		<div class="image">
			<img src={data.exercise.image} alt={data.exercise.name}>
		</div>
	</div>
</div>


<style lang="postcss">
	.exercise {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}

	.facts {
		@apply flex flex-col md:flex-row-reverse gap-3;
	}

	.image {
		@apply p-3 border;
	}
</style>