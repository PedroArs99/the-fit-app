import { error } from '@sveltejs/kit';
import { exerciseRepository } from '$lib/exercises/exercise.repository';

export const load = async () => {
	try {
		const exercises = await exerciseRepository.findAll();
		const categories = new Set(
			exercises.map((it) => it.category).sort((a, b) => a.localeCompare(b))
		);

		return { categories, exercises };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
