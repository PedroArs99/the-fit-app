<script>
	import Icon from './Icon.svelte';
</script>

<div class="navbar">
	<a href="/"  class="text-lg font-bold">The Fit App</a>

	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn btn-ghost rounded-btn">
			<Icon icon="bars" />
		</div>
		<ul class="menu dropdown-content">
			<li>
				<a href="/exercises">
					<Icon icon="dumbbell" />
					<span>Exercises</span>
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.dropdown-content {
		@apply rounded-box z-[1] mt-4 p-2 shadow min-w-52 w-full bg-base-100;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
	}
</style>
