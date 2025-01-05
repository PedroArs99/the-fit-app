<script lang="ts">
	import Navbar from '$lib/ui/components/Navbar.svelte';
	import { navigating } from '$app/stores';
	import Spinner from '../lib/ui/components/Spinner.svelte';

	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<Navbar />

<div class="p-3">
	{#if $navigating} 
		<Spinner />
	{:else}
		{@render children?.()}
	{/if}
</div>