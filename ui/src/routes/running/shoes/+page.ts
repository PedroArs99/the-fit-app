import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { shoeRepository } from '$lib/running/shoes/shoe.repository';

export const load: PageLoad = async () => {
	try {
		const shoes = await shoeRepository.findAll();

		return { shoes };
	} catch (e) {
		error(500, (e as Error).message);
	}
};
