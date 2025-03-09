<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<script lang="ts">
	import type { IconLib } from './icons/Icon';
	import Icon from './icons/Icon.svelte';

	type NavLink = {
		href: string;
		icon: IconLib;
		text: String;
	};

	const navLinks: NavLink[] = [
		{
			href: '/exercises',
			icon: 'dumbbell',
			text: 'Exercises'
		},
		{
			href: '/nutrition',
			icon: 'apple',
			text: 'Nutrition'
		},
		{
			href: '/running/shoes',
			icon: 'person-running',
			text: 'Running'
		},
		{
			href: '/training-plans',
			icon: 'list',
			text: 'Training Plans'
		}
	];
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
				class="menu dropdown-content bg-base-100 rounded-box z-[1] w-48 mt-3 p-2 shadow-2xl"
			>
				{#each navLinks as navLink}
					<li>
						<a href={navLink.href}>
							<Icon icon={navLink.icon} size="sm" />
							<span>{navLink.text}</span>
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div class="nav-end-lg">
		{#each navLinks as navLink}
			<a class="nav-item" href={navLink.href}>
				<Icon icon={navLink.icon} size="sm" />
				<span>{navLink.text}</span>
			</a>
		{/each}
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
