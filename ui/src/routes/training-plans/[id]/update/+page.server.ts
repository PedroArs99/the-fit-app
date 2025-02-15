import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { trainingPlanRepository } from '$lib/training-plans/training-plan.repository';

export const load: PageServerLoad = async ({ params }) => {
  try {
    const id = params.id;
    const trainingPlan = await trainingPlanRepository.findById(id);

    if (!trainingPlan) error(404, `Training plan with id ${id} was not found.`);

    return { trainingPlan };
  } catch (e) {
    error(500, (e as Error).message);
  }
};