<script lang="ts">
	import FullWidthCard from '$lib/ui/components/cards/FullWidthCard.svelte';
	import type { Shoe } from '../shoe.model';

	type Props = {
		shoe: Shoe;
	};

	let { shoe }: Props = $props();
</script>

<FullWidthCard>
	<div class="flex justify-start">
		<img class="card-image" width="256px" height="256px" src={shoe.imageUrl} alt={shoe.name} />

		<span class="card-title">{shoe.name}</span>
	</div>
</FullWidthCard>
