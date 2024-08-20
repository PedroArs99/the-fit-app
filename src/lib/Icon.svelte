<script lang="ts">
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: 'bars';

	const iconToDefinition = {
		bars: faBars
	};
</script>

<Fa icon={iconToDefinition[icon]} />
