<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Exercise } from "$lib/exercises/exercise.model";
	import { exerciseRepository } from "$lib/exercises/exercise.repository";

	interface Props {
		data: { exercise: Exercise};
	}

	let { data }: Props = $props();

  let exercise: Partial<Exercise> = $state({
		id: data.exercise.id,
    name: data.exercise.name,
    description: data.exercise.description,
    category: data.exercise.category,
    image: data.exercise.image,
  })

  async function submit() {
    await exerciseRepository.update(exercise.id!, exercise);

    goto(`/exercises/${exercise.id}`)
  }

  let isFormValid = $derived(!!exercise.id && !!exercise.name && !!exercise.category);
</script>

<div class="page">
	<h1>Update Exercise</h1>

	<form>
		<label class="form-control">
			<div class="label">
				<span class="label-text">Name</span>
			</div>
			<!-- svelte-ignore a11y_autofocus -->
			<input bind:value={exercise.name} type="text" placeholder="Type here" class="input" autofocus />
		</label>

		<label class="form-control">
			<div class="label">
				<span class="label-text">Description <span class="badge badge-info">Optional</span></span>
        
			</div>
			<textarea bind:value={exercise.description} class="textarea textarea-bordered" placeholder="Type here"></textarea>
		</label>

		<label class="form-control">
			<div class="label">
				<span class="label-text">Category</span>
			</div>
			<select bind:value={exercise.category} class="select select-bordered">
				<option value={undefined} disabled selected>Pick one</option>
				<option>Abs</option>
				<option>Arms</option>
				<option>Back</option>
				<option>Chest</option>
				<option>Legs</option>
				<option>Calves</option>
				<option>Cardio</option>
				<option>Shoulders</option>
			</select>
		</label>

		<label class="form-control">
			<div class="label">
				<span class="label-text">Image <span class="badge badge-info">Optional</span></span>
			</div>
			<!-- svelte-ignore a11y_autofocus -->
			<input bind:value={exercise.image} type="text" placeholder="Type here" class="input" autofocus />
		</label>

    <button class="btn btn-primary" disabled={!isFormValid} onclick={submit}>Save</button>
	</form>
</div>

<style lang="postcss">
	.page {
		display: flex;
		flex-direction: column;

		@apply gap-3;
	}
</style>
