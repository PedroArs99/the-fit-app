<script>
	import Icon from './Icon.svelte';
</script>

<div class="navbar">
	<a href="/" class="text-lg font-bold">The Fit App</a>

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
			<li>
				<a href="/training-plans">
					<Icon icon="list" />
					<span>Training Plans</span>
				</a>
			</li>
		</ul>
	</div>
</div>

<style lang="postcss">
	.dropdown-content {
		width: calc(100vw - 1rem);

		@apply mt-4 p-2 z-[1] rounded-box shadow-2xl bg-base-100;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
	}
</style>
