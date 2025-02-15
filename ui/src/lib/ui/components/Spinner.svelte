<script>
	import Icon from './Icon.svelte';
</script>

<div class="spinner">
	<Icon icon="atom" size="5x" spin />
</div>

<style lang="postcss">
	.spinner {
		display: flex;

		position: absolute;
		top: 50%;
		left: calc(50% - 40px );
	}
</style>
