<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<script>
	import Icon from './Icon.svelte';
</script>

<div class="navbar">
	<div class="nav-start">
		<a href="/" class="home-link">
			<Icon icon="heart-pulse" size="2x" />
			<span>The Fit App</span>
		</a>
	</div>

	<div class="nav-end">
		<div class="dropdown dropdown-end">
			<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
				<Icon icon="bars" />
			</div>
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] w-48 mt-3 p-2 shadow-2xl"
			>
				<li>
					<a href="/exercises">
						<Icon icon="dumbbell" size="sm" />
						<span>Exercises</span>
					</a>
				</li>
				<li>
					<a href="/training-plans">
						<Icon icon="list" size="sm" />
						<span>Training Plans</span>
					</a>
				</li>
				<li>
					<a href="/nutrition">
						<Icon icon="apple" size="sm" />
						<span>Nutrition</span>
					</a>
				</li>
			</ul>
		</div>
	</div>

	<div class="nav-end-lg">
		<a class="nav-item" href="/exercises">
			<Icon icon="dumbbell" size="sm" />
			<span>Exercises</span>
		</a>
		<a class="nav-item" href="/training-plans">
			<Icon icon="list" size="sm" />
			<span>Training Plans</span>
		</a>
		<a class="nav-item" href="/nutrition">
		<Icon icon="apple" size="sm" />
		<span>Nutrition</span>
	</a>
	</div>
</div>

<style lang="postcss">
	.home-link {
		display: flex;
		align-items: center;

		@apply gap-3 text-lg font-bold;
	}

	.navbar {
		display: flex;
		justify-content: space-between;

		@apply bg-primary;
	}

	.nav-end {
		@apply md:hidden;
	}

	.nav-end-lg {
		@apply hidden md:flex gap-2;
	}

	.nav-item {
		@apply btn btn-ghost;
	}
</style>
