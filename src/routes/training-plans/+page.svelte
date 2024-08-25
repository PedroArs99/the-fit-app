<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';
	import { trainingPlanRepository } from '$lib/training-plans/training-plan.repository';
	import { fade } from 'svelte/transition';

	export let data: { trainingPlans: TrainingPlan[] };

	function onDeleteTrainingPlan(id: string) {
		trainingPlanRepository.delete(id).then(() => {
			data.trainingPlans = data.trainingPlans.filter((tp) => tp.id !== id);
		});
	}
</script>

<div class="actions">
	<a href="/training-plans/new" class="btn btn-primary bg-gray-500">
		<Icon icon="plus" />
		<span>TODO: Add New</span>
	</a>
</div>

<div class="divider"></div>

<div class="training-plans">
	{#each data.trainingPlans as trainingPlan}
		<div class="card w-full" out:fade>
			<div class="card-body">
				<a href={`training-plans/${trainingPlan.id}`} class="card-title">{trainingPlan.name}</a>

				<div class="card-actions">
					<button class="btn btn-info bg-gray-500">
						<span>TODO: Update</span>
						<Icon icon="pencil" />
					</button>
					<button class="btn btn-error" on:dblclick={() => onDeleteTrainingPlan(trainingPlan.id)}>
						<Icon icon="trash" />
						<span>Delete</span>
					</button>
				</div>
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.actions {
		display: flex;
		flex-direction: row-reverse;
	}

	.card-actions {
		display: flex;
		flex-direction: row;
	}

	.training-plans {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
