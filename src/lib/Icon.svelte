<script lang="ts">
	import { faArrowUpRightFromSquare, faBars, faDumbbell } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: 'bars' | 'dumbbell' | 'link-new-tab';

	const iconToDefinition = {
		bars: faBars,
		dumbbell: faDumbbell,
		'link-new-tab': faArrowUpRightFromSquare
	};
</script>

<Fa icon={iconToDefinition[icon]} />
