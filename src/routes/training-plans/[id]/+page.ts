import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { trainingPlanRepository } from '$lib/training-plans/training-plan.repository';

export const load: PageLoad = async ({ params, url }) => {
	try {
		const id = params.id;
		const trainingPlan = await trainingPlanRepository.findById(id);

		if (!trainingPlan) error(404, `Training plan with id ${id} was not found.`);

		const activeWorkoutIdx = url.searchParams.get('activeWorkout') ?? 0;

		return { activeWorkoutIdx, trainingPlan };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
