<script lang="ts">
	import Icon from '$lib/ui/components/icons/Icon.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Exercise } from '../exercise.model';
	import { fade } from 'svelte/transition';

	interface Props {
		exercise: Exercise;
	}

	let { exercise }: Props = $props();

	const dispatch = createEventDispatcher();

	function onDelete() {
		dispatch('delete', { id: exercise.id });
	}
</script>

<div out:fade class="card md:max-w-56">
	<div class="card-actions">
		<a href={`/exercises/${exercise.id}`} class="btn btn-sm btn-ghost">
			<Icon icon="link-new-tab" />
		</a>
		<a href={`/exercises/${exercise.id}/update`} class="btn btn-sm btn-ghost">
			<Icon icon="pencil" />
		</a>
		<button ondblclick={onDelete} class="btn btn-sm btn-ghost">
			<Icon icon="trash" />
		</button>
	</div>

	<figure>
		{#if exercise.image}
			<img class="card-image" width="256px" height="256px" src={exercise.image} alt={exercise.name} />
		{:else}
			<Icon icon="dumbbell" size="3x" />
		{/if}
	</figure>

	<div class="card-body">
		<h2 class="card-title">{exercise.name}</h2>
	</div>
</div>

<style lang="postcss">
	.card-image {
		width: 200px;
		height: 200px;
	}

	.card-actions {
		display: flex;
		flex-direction: row-reverse;

		@apply p-1 gap-1;
	}
</style>
