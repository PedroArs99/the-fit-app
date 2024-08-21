import type { Exercise } from '$lib/exercises/exercise.model';
import { supabase } from '$lib/supabase/client';

class ExerciseRepository {
	private tableName = 'exercises';

	async create(exercise: Partial<Exercise>): Promise<Exercise> {
		const { data, error } = await supabase
			.from(this.tableName)
			.insert([{ ...exercise }])
			.select('*');

		if (error) throw Error(error.message);

		return data[0];
	}

	async delete(id: string): Promise<void> {
		const { error } = await supabase.from(this.tableName).delete().eq('id', id);

		if (error) throw Error(error.message);
	}

	async findAll(): Promise<Exercise[]> {
		const { data, error } = await supabase.from(this.tableName).select('*').order('name');

		if (error) throw Error(error.message);

		return data;
	}

	async findById(id: string): Promise<Exercise | null> {
		const { data, error } = await supabase.from(this.tableName).select('*').eq('id', id);

		if (error) throw Error(error.message);

		if (data) {
			return data[0];
		} else {
			return null;
		}
	}

	async update(id: string, exercise: Partial<Exercise>) {
		const _exercise = { ...exercise };
		delete _exercise.id;

		const { error } = await supabase
			.from(this.tableName)
			.update({ ..._exercise })
			.eq('id', id);

		if (error) throw Error(error.message);
	}
}

export const exerciseRepository = new ExerciseRepository();