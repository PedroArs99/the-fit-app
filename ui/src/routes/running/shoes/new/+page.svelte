<script lang="ts">
	import { goto } from '$app/navigation';
	import type { Shoe } from '$lib/running/shoes/shoe.model';
	import { shoeRepository } from '$lib/running/shoes/shoe.repository';
	import Page from '$lib/ui/components/Page.svelte';

	let shoes: Partial<Shoe> = $state({
		name: undefined,
		imageUrl: undefined
	});

	async function submit() {
		const result = await shoeRepository.create(shoes);

		if (result.id) {
			goto(`/running/shoes/${result.id}`);
		}
	}

	let isFormValid = $derived(!!shoes.name && !!shoes.imageUrl);
</script>

<Page title="New Shoes">
	<form>
		<label class="form-control">
			<div class="label">
				<span class="label-text">Name</span>
			</div>
			<!-- svelte-ignore a11y_autofocus -->
			<input bind:value={shoes.name} type="text" placeholder="Type here" class="input" autofocus />
		</label>

		<div class="flex flex-wrap md:flex-nowrap md:gap-3">
			<label class="form-control">
				<div class="label">
					<span class="label-text">Current Kms</span>
				</div>
				<input
					bind:value={shoes.currentKm}
					type="number"
					step="0.01"
					placeholder="0"
					class="input"
				/>
			</label>
			
			<label class="form-control">
				<div class="label">
					<span class="label-text">Max Kms</span>
				</div>
				<input
					bind:value={shoes.maxKm}
					type="number"
					placeholder="1000"
					class="input"
				/>
			</label>
		</div>

		<label class="form-control">
			<div class="label">
				<span class="label-text">Image <span class="badge badge-info">Optional</span></span>
			</div>
			<!-- svelte-ignore a11y_autofocus -->
			<input
				bind:value={shoes.imageUrl}
				type="text"
				placeholder="Type here"
				class="input"
				autofocus
			/>
		</label>

		<button class="btn btn-primary" disabled={!isFormValid} onclick={submit}>Save</button>
	</form>
</Page>
