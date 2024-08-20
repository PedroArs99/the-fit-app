import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { exerciseRepository } from '$lib/exercises/exercise.repository';
import _ from 'lodash';

export const load: PageLoad = async () => {
	try {
		const exercises = await exerciseRepository.findAll();
		const groupedByCategory = _.groupBy(exercises, 'category');

		return { exercises: Object.entries(groupedByCategory) };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
