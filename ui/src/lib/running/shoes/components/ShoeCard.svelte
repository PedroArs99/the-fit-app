<script lang="ts">
	import FullWidthCard from '$lib/ui/components/cards/FullWidthCard.svelte';
	import ProgressBar from '$lib/ui/components/ProgressBar.svelte';
	import type { Shoe } from '../shoe.model';

	type Props = {
		shoe: Shoe;
	};

	let { shoe }: Props = $props();
</script>

<FullWidthCard>
	<div class="flex flex-col md:flex-row justify-start">
		<img class="card-image" height="256px" src={shoe.imageUrl} alt={shoe.name} />

		<div class="divider divider-horizontal"></div>

		<div class="flex grow flex-col">
			<span class="card-title">{shoe.name}</span>
			<ProgressBar value={shoe.currentKm} max={shoe.maxKm} label={`${shoe.currentKm}/${shoe.maxKm} Km`} />
		</div>
	</div>
</FullWidthCard>
