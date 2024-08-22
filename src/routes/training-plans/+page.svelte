<script lang="ts">
	import Icon from '$lib/Icon.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';

	export let data: { trainingPlans: TrainingPlan[] };
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
		<div class="card">
			<div class="card-body">
				<h2 class="card-title">{trainingPlan.name}</h2>

				<div class="card-actions">
					<button class="btn btn-ghost btn-outline">
						<Icon icon="link-new-tab" />
						<span>Open</span>
					</button>
					<button class="btn btn-info bg-gray-500">
						<span>TODO: Update</span>
						<Icon icon="pencil" />
					</button>
					<button class="btn btn-error bg-gray-500">
						<Icon icon="trash" />
						<span>TODO: Delete</span>
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
