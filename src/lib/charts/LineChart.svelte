<script lang="ts">
	import { CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement } from 'chart.js';
	import { onMount } from 'svelte';

  Chart.register(
		CategoryScale,
		LineController,
		LineElement,
		LinearScale,
		PointElement,
  )

	export let dataPoints: { label: string, value: number}[];

	onMount(() => {
		const ctx = document.getElementById('line-chart') as HTMLCanvasElement;

		if (ctx) {
			new Chart(ctx, {
				type: 'line',
				data: {
					labels: dataPoints.map((it) => it.label),
					datasets: [
						{
							data: dataPoints.map((it) => it.value),
              backgroundColor: 'rgb(255,219,1)',
              borderColor: 'rgb(255,219,1)',
              tension: 0.25,
						}
					],
				},
        options: {
          plugins: {
            legend: {
              display: false,
            }
          },
        }
      },);
		}
	});
</script>

<div class="p-1 md:p-3">
	<canvas id="line-chart" class="w-full"></canvas>
</div>
