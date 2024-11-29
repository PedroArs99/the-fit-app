<script lang="ts">
	import Icon from '$lib/ui/components/Icon.svelte';
	import { blur } from 'svelte/transition';
	import { bmr, effectiveDailyIncome } from '../calculations/bmr';

	let weight = 72;
	let height = 177;
	let age = 25;
	let activityLevel = 1.55;
	let deficitRate = 0.9;

	let areDetailsOpen = false;

	$: bmrResult = bmr(weight, height, age, activityLevel);
	$: dailyIncome = effectiveDailyIncome(bmrResult, deficitRate);
</script>

<div class="bmr">
	<div class="bmr-details-sm">
		{#if areDetailsOpen}
			<div class="flex flex-col gap-3" in:blur out:blur>
				<label class="input bmr-input">
					Weight (Kg)
					<input type="number" bind:value={weight} />
				</label>
				<label class="input bmr-input">
					Height (cm)
					<input type="number" bind:value={height} />
				</label>
				<label class="input bmr-input">
					Age
					<input type="number" bind:value={age} />
				</label>
				<label class="input bmr-input">
					Activity Level
					<input type="number" bind:value={activityLevel} />
				</label>
				<label class="input bmr-input">
					Deficit Rate
					<input type="number" bind:value={deficitRate} />
				</label>
			</div>
		{/if}
		<button class="btn btn-sm" on:click={() => (areDetailsOpen = !areDetailsOpen)}>
			Body Details
			<Icon icon={areDetailsOpen ? 'chevron-up' : 'chevron-down'} />
		</button>
	</div>

	<div class="bmr-details-md">
		<label class="input bmr-input">
			Weight (Kg)
			<input type="number" bind:value={weight} />
		</label>
		<label class="input bmr-input">
			Height (cm)
			<input type="number" bind:value={height} />
		</label>
		<label class="input bmr-input">
			Age
			<input type="number" bind:value={age} />
		</label>
		<label class="input bmr-input">
			Activity Level
			<input type="number" bind:value={activityLevel} />
		</label>
		<label class="input bmr-input">
			Deficit Rate
			<input type="number" bind:value={deficitRate} />
		</label>
	</div>

	<div class="divider divider-horizontal divider-secondary"></div>

	<div class="bmr-result">
		<h3>BMR</h3>
		<span class="font-bold">{bmrResult} kcal/day</span>
	</div>

	<div class="divider divider-horizontal divider-secondary"></div>

	<div class="bmr-result">
		<h3>Effective Income</h3>
		<span class="font-bold">{dailyIncome} kcal/day</span>
	</div>
</div>

<style lang="postcss">
	.bmr {
		display: flex;

		@apply gap-3 flex-col md:flex-row;
	}

	.bmr-input {
		@apply input-bordered flex items-center gap-2;
	}

	.bmr-details-sm {
		@apply flex flex-col gap-3 md:hidden;
	}

  .bmr-details-md {
    @apply hidden md:flex gap-3;
  }
</style>
