import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { exerciseRepository } from '$lib/exercises/exercise.repository';

export const load: PageLoad = async ({ params }) => {
  try {
    const id = params.id;
    const exercise = await exerciseRepository.findById(id);
    
    if(!exercise) error(404, `Exercise with id ${id} was not found.`)

		return { exercise };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
