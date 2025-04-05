<script>
	import Icon from './icons/Icon.svelte';
</script>

<main>
	<a class="dashboard-item" href="/exercises">
		<Icon icon="dumbbell" size="2x" />
		<h2>Exercises</h2>
	</a>
	
  <a class="dashboard-item" href="/training-plans">
		<Icon icon="list" size="2x" />
		<h2>Training Plans</h2>
	</a>
  
  <a class="dashboard-item" href="/nutrition">
		<Icon icon="apple" size="2x" />
		<h2>Nutrition</h2>
	</a>
  
  <a class="dashboard-item" href="/running/shoes">
		<Icon icon="person-running" size="2x" />
		<h2>Running</h2>
	</a>
</main>

<style lang="postcss">
  main {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @apply gap-3;
  }

	.dashboard-item {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: center;

    @apply p-3 rounded-2xl gap-3 border border-primary hover:bg-primary hover:border-0 hover:text-secondary-content;
	}
</style>
