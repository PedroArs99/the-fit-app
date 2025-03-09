<script lang="ts">
	import type { Snippet } from "svelte";
	import { fade } from "svelte/transition";

  interface Props {
		children: Snippet;
	}

	let { children }: Props = $props();
</script>


<div class="card w-full" out:fade>
	<div class="card-body">
		{@render children()}
	</div>
</div>
