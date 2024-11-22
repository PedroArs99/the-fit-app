<script lang="ts">
	import {
		faAppleAlt,
		faArrowUpRightFromSquare,
		faBars,
		faChevronLeft,
		faChevronRight,
		faDumbbell,
		faHeartPulse,
		faList,
		faPencil,
		faPlus,
		faTrash
	} from '@fortawesome/free-solid-svg-icons';
	import Fa, { type IconSize } from 'svelte-fa';

	export let icon:
	  | 'apple'
		| 'bars'
		| 'chevron-left'
		| 'chevron-right'
		| 'dumbbell'
		| 'heart-pulse'
		| 'link-new-tab'
		| 'list'
		| 'pencil'
		| 'plus'
		| 'trash';
	export let size: IconSize | undefined = undefined;

	const iconToDefinition = {
		apple: faAppleAlt,
		bars: faBars,
		'chevron-left': faChevronLeft,
		'chevron-right': faChevronRight,
		dumbbell: faDumbbell,
		'heart-pulse': faHeartPulse,
		'link-new-tab': faArrowUpRightFromSquare,
		list: faList,
		pencil: faPencil,
		plus: faPlus,
		trash: faTrash
	};
</script>

<Fa icon={iconToDefinition[icon]} {size} />
