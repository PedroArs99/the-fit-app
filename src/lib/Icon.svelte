<script lang="ts">
	import { faBars, faDumbbell, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: 'bars' | 'dumbbell';

	const iconToDefinition = {
		bars: faBars,
		dumbbell: faDumbbell,
	};
</script>

<Fa icon={iconToDefinition[icon]} />
