<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	interface Props {
		children: SvelteComponent;
		title: string;
	}

	let { children, title } = $props();
</script>

<div class="page">
	<h1>{title}</h1>

	{@render children()}
</div>

<style lang="postcss">
	.page {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
