<script lang="ts">
	import ShoeCard from '$lib/running/shoes/components/ShoeCard.svelte';
	import type { Shoe } from '$lib/running/shoes/shoe.model';
	import FullWidthCard from '$lib/ui/components/cards/FullWidthCard.svelte';
	import Icon from '$lib/ui/components/icons/Icon.svelte';
	import Page from '$lib/ui/components/Page.svelte';

	interface Props {
		data: { shoes: Shoe[] };
	}

	let { data }: Props = $props();
	let shoes = data.shoes;
</script>

{#snippet actions()}
	<a href="/running/shoes/new" class="btn btn-primary">
		<Icon icon="plus" />
		<span>Add New</span>
	</a>
{/snippet}


<Page title="Shoes" actions={actions}>
		{#each shoes as shoe}
			<ShoeCard shoe={shoe}/>
		{/each}
</Page>
