<script lang="ts">
	import type { Exercise } from '$lib/exercises/exercise.model';
	import Icon from '$lib/Icon.svelte';

	export let data: { exercises: [string, Exercise[]][] };
</script>

<div class="categories">
	{#each data.exercises as [category, exercises]}
		<div class="category">
			<h2>{category}</h2>

			<table class="table table-zebra">
				<thead>
					<tr>
						<th>Name</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{#each exercises as exercise}
						<tr>
							<td>{exercise.name}</td>
							<td>
								<div class="actions">
									<a href={`/exercises/${exercise.id}`} target="_blank" class="action">
										<Icon icon="link-new-tab" />
									</a>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{/each}
</div>

<style lang="postcss">
	.action {
		@apply btn btn-sm btn-ghost;
	}

	.actions {
		display: flex;
		flex-direction: row;
		justify-content: end;
	}

	.categories {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
