<script lang="ts">
	import FullWidthCard from '$lib/ui/components/cards/FullWidthCard.svelte';
	import Page from '$lib/ui/components/Page.svelte';
	import type { Shoe } from '../../lib/running/shoes/shoe.model';

	interface Props {
		data: { shoes: Shoe[] };
	}

	let { data }: Props = $props();
	let shoes = data.shoes;
</script>

<Page title="Shoes">
		{#each shoes as shoe}
			<FullWidthCard>
				<div class="flex justify-start">
					<img
						class="card-image"
						width="256px"
						height="256px"
						src={shoe.imageUrl}
						alt={shoe.name}
					/>

					<span class="card-title">{shoe.name}</span>
				</div>
			</FullWidthCard>
		{/each}
</Page>
