<script lang="ts">
  import { bmr, effectiveDailyIncome } from "../calculations/bmr";

  let weight = 72;
  let height = 177;
  let age = 25;
  let activityLevel = 1.55;
  let deficitRate = 0.9;

  $: bmrResult = bmr(weight, height, age, activityLevel);
  $: dailyIncome = effectiveDailyIncome(bmrResult, deficitRate)
</script>

<div class="bmr">
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
</style>
