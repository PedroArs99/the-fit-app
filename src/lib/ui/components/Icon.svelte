<script lang="ts">
	import {
		faAppleAlt,
		faArrowUpRightFromSquare,
		faAtom,
		faBars,
		faChevronDown,
		faChevronLeft,
		faChevronRight,
		faChevronUp,
		faDumbbell,
		faHeartPulse,
		faList,
		faPencil,
		faPlus,
		faRunning,
		faTrash
	} from '@fortawesome/free-solid-svg-icons';
	import Fa, { type IconSize } from 'svelte-fa';

	export let icon:
		| 'apple'
		| 'atom'
		| 'bars'
		| 'chevron-down'
		| 'chevron-left'
		| 'chevron-right'
		| 'chevron-up'
		| 'dumbbell'
		| 'heart-pulse'
		| 'link-new-tab'
		| 'list'
		| 'pencil'
		| 'plus'
		| 'trash';

	export let size: IconSize | undefined = undefined;
	export let spin: boolean = false;

	const iconToDefinition = {
		apple: faAppleAlt,
		atom: faAtom,
		bars: faBars,
		'chevron-down': faChevronDown,
		'chevron-left': faChevronLeft,
		'chevron-right': faChevronRight,
		'chevron-up': faChevronUp,
		dumbbell: faDumbbell,
		'heart-pulse': faHeartPulse,
		'link-new-tab': faArrowUpRightFromSquare,
		list: faList,
		pencil: faPencil,
		plus: faPlus,
		trash: faTrash
	};
</script>

<Fa icon={iconToDefinition[icon]} {size} spin={spin} />
