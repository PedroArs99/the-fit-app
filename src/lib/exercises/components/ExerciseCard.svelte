<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import { createEventDispatcher } from 'svelte';
	import type { Exercise } from '../exercise.model';
	import { fade } from 'svelte/transition';

	export let exercise: Exercise;

	const dispatch = createEventDispatcher();

	function onDelete() {
		dispatch('delete', { id: exercise.id });
	}
</script>

<div out:fade class="card">
	<div class="card-actions">
		<a href={`/exercises/${exercise.id}`} class="btn btn-sm btn-ghost">
			<Icon icon="link-new-tab" />
		</a>
		<a href={`/exercises/${exercise.id}/update`} class="btn btn-sm btn-ghost">
			<Icon icon="pencil" />
		</a>
		<button on:dblclick={onDelete} class="btn btn-sm btn-ghost">
			<Icon icon="trash" />
		</button>
	</div>

	<figure>
		{#if exercise.image}
			<img src={exercise.image} alt={exercise.name} />
		{:else}
			<Icon icon="dumbbell" size="3x"/>
		{/if}
	</figure>

	<div class="card-body">
		<h2 class="card-title">{exercise.name}</h2>
	</div>
</div>
