<script lang="ts">
	import { faArrowUpRightFromSquare, faBars, faDumbbell, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	export let icon: 'bars' | 'dumbbell' | 'link-new-tab' | 'plus' | 'trash';

	const iconToDefinition = {
		bars: faBars,
		dumbbell: faDumbbell,
		'link-new-tab': faArrowUpRightFromSquare,
		'plus': faPlus,
		'trash': faTrash,
	};
</script>

<Fa icon={iconToDefinition[icon]} />
