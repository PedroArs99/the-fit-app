<div class="flex flex-col gap-3">
	<h1>Meals Diary</h1>

	<div class="actions">
		<button class="btn btn-sm btn-primary">Add Meal</button>
	</div>

	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th>Name</th>
				<th>Kcal</th>
			</tr>
		</thead>
		<tbody>
			<!-- row 1 -->
			<tr>
				<td>Pizza</td>
				<td>+1032</td>
			</tr>
			<tr class="bg-base-300">
				<td class="font-bold">Result</td>
				<td class="font-bold"> 1032 / 2451 </td>
			</tr>
		</tbody>
	</table>
</div>

<style>
  .actions {
		display: flex;
		flex-direction: row-reverse;
	}
</style>