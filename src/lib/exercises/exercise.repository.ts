import type { Exercise } from "$lib/exercises/exercise.model";
import { supabase } from "$lib/supabase/client";

class ExerciseRepository {
  private tableName = 'exercises';

  async readAll(): Promise<Exercise[]> {
    const { data, error } = await supabase.from(this.tableName).select('*');

    if (error) throw Error(error.message);

    return data;
  }
}

export const exerciseRepository = new ExerciseRepository();