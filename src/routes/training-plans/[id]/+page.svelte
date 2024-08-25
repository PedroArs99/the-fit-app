<script lang="ts">
	import LineChart from '$lib/charts/LineChart.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';

	export let data: { trainingPlan: TrainingPlan };

</script>

<div class="training-plan">
	<h1>{data.trainingPlan.name}</h1>
</div>

<style lang="postcss">
	
</style>
