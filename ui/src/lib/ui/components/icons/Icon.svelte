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
		faPersonRunning,
		faPlus,
		faTrash
	} from '@fortawesome/free-solid-svg-icons';

	import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
	import { config, type SizeProp } from '@fortawesome/fontawesome-svg-core';

	interface Props {
		icon: IconLib;
			
		size?: SizeProp | undefined;
		spin?: boolean;
	}

	let { icon, size = undefined, spin = false }: Props = $props();

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
		'person-running': faPersonRunning,
		plus: faPlus,
		trash: faTrash
	};

	import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
	import type { IconLib } from '../Icon';
	config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

</script>

<FontAwesomeIcon icon={iconToDefinition[icon]} {size} {spin} />
