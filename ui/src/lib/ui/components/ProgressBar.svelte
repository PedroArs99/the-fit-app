<script lang="ts">
  type Props = {
    label?: string;
    max: number;
    value: number;
  }

  let {value, max, label }: Props = $props();
</script>

<progress class="progress progress-primary" value={value} max={max} data-label={label}></progress>

<style>
  progress {
    height: 1.5em;
  }

	progress::before {
		content: attr(data-label);
    font-weight: 0.8em;
    text-align: center;
    vertical-align: middle;

		/*Position text over the progress bar */
		position: absolute;
    /* top: 5px; */
		left: 0;
		right: 0;
	}
</style>