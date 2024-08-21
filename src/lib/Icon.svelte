<script lang="ts">
	import { faArrowUpRightFromSquare, faBars, faDumbbell, faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
	import Fa, { type IconSize } from 'svelte-fa';

	export let icon: 'bars' | 'dumbbell' | 'link-new-tab' | 'pencil' | 'plus' | 'trash';
	export let size: IconSize | undefined = undefined;

	const iconToDefinition = {
		bars: faBars,
		dumbbell: faDumbbell,
		'link-new-tab': faArrowUpRightFromSquare,
		'pencil': faPencil,
		'plus': faPlus,
		'trash': faTrash,
	};
</script>

<Fa icon={iconToDefinition[icon]} size={size} />
