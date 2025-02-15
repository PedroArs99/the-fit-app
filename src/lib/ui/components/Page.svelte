<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		actions?: Snippet;
		children: Snippet;
		title: string;
	}

	let { actions, children, title }: Props = $props();
</script>

<div class="page">
	<h1>{title}</h1>

	{#if actions}
		<div class="actions">
			{@render actions()}
		</div>
	{/if}

	{@render children()}
</div>

<style lang="postcss">
	.actions {
		display: flex;
		flex-direction: row-reverse;
	}

	.page {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
