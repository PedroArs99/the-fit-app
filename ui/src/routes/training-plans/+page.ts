import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { trainingPlanRepository } from '$lib/training-plans/training-plan.repository';

export const load: PageLoad = async () => {
	try {
		const trainingPlans = await trainingPlanRepository.findAll();

		return { trainingPlans };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
