<script lang="ts">
	import { goto } from "$app/navigation";
	import type { Exercise } from "$lib/exercises/exercise.model";
	import { exerciseRepository } from "$lib/exercises/exercise.repository";
	import Page from "$lib/ui/components/Page.svelte";

  let exercise: Partial<Exercise> = $state({
    name: undefined,
    description: undefined,
    category: undefined,
    image: undefined,
  })

  async function submit() {
    const result = await exerciseRepository.create(exercise);

    if(result.id) {
      goto(`/exercises/${result.id}`)
    }

  }

  let isFormValid = $derived(!!exercise.name && !!exercise.category);
</script>

<Page title="New Exercise">
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
</Page>