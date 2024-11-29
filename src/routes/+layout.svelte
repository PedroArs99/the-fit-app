<script>
	import Navbar from '$lib/ui/components/Navbar.svelte';
	import { navigating } from '$app/stores';
	import Spinner from '../lib/ui/components/Spinner.svelte';

	import '../app.css';
</script>

<Navbar />

<div class="p-3">
	{#if $navigating} 
		<Spinner />
	{:else}
		<slot />
	{/if}
</div>