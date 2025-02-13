<script lang="ts">
	import Navbar from '$lib/ui/components/Navbar.svelte';
	import { navigating } from '$app/state';
	import Spinner from '../lib/ui/components/Spinner.svelte';
	import type { Snippet } from 'svelte';
	
	import '../app.css';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />

<div class="p-3">
	{#if navigating.to}
		<Spinner />
	{:else}
		{@render children?.()}
	{/if}
</div>
