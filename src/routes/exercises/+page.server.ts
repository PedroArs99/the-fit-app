import { error } from '@sveltejs/kit';
import { exerciseRepository } from '$lib/exercises/exercise.repository';

export const load = async () => {
	try {
		const exercises = await exerciseRepository.findAll();

		return { exercises };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
