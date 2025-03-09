<script lang="ts">
	import Icon from '$lib/ui/components/icons/Icon.svelte';
	import type { TrainingPlan } from '$lib/training-plans/training-plan.model';
	import { trainingPlanRepository } from '$lib/training-plans/training-plan.repository';
	import { fade } from 'svelte/transition';
	import Page from '$lib/ui/components/Page.svelte';

	interface Props {
		data: { trainingPlans: TrainingPlan[] };
	}

	let { data = $bindable() }: Props = $props();

	function onDeleteTrainingPlan(id: string) {
		trainingPlanRepository.delete(id).then(() => {
			data.trainingPlans = data.trainingPlans.filter((tp) => tp.id !== id);
		});
	}
</script>

{#snippet actions()}
	<a href="/training-plans/new" class="btn btn-primary bg-gray-500">
		<Icon icon="plus" />
		<span>TODO: Add New</span>
	</a>
{/snippet}

<Page title="Training Plans" actions={actions}>
	<div class="training-plans">
		{#each data.trainingPlans as trainingPlan}
			<div class="card w-full" out:fade>
				<div class="card-body">
					<a href={`training-plans/${trainingPlan.id}`} class="card-title">{trainingPlan.name}</a>

					<div class="card-actions">
						<a href={`training-plans/${trainingPlan.id}/update`} class="btn btn-secondary">
							<Icon icon="pencil" />
							<span>Update</span>
						</a>
						<button class="btn btn-error" ondblclick={() => onDeleteTrainingPlan(trainingPlan.id)}>
							<Icon icon="trash" />
							<span>Delete</span>
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</Page>


<style lang="postcss">
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
