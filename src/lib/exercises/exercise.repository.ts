import type { Exercise } from '$lib/exercises/exercise.model';
import { supabase } from '$lib/supabase/client';

class ExerciseRepository {
	private tableName = 'exercises';

	async findAll(): Promise<Exercise[]> {
		const { data, error } = await supabase.from(this.tableName).select('*');

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
}

export const exerciseRepository = new ExerciseRepository();
