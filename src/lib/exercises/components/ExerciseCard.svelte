<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { Exercise } from '../exercise.model';

	export let exercise: Exercise;
</script>

<div class="card">
	<div class="card-actions">
		<a href={`/exercises/${exercise.id}`}  class="btn btn-sm btn-ghost">
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
