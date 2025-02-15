<script lang="ts">
	import { page } from '$app/state';
	import { createEventDispatcher } from 'svelte';

	let { categories } = page.data;

	const dispatch = createEventDispatcher();

	function onChange(event: Event) {
		const target = event.target as HTMLSelectElement;
		const category = target.value ?? undefined;

		dispatch('change', { category });
	}
</script>

<div class="category-picker">
	<label class="form-control w-full">
		<div class="label">
			<span class="label-text">Category</span>
		</div>
		<select class="select select-bordered" onchange={onChange}>
			<option selected value={undefined}>-</option>
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</label>
</div>

<style lang="postcss">
	.category-picker {
		@apply max-w-56;
	}
</style>