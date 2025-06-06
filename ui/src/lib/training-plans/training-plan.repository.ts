import { supabase } from '$lib/supabase/client';
import type { Repository } from '$lib/supabase/repository';
import type { TrainingPlan } from './training-plan.model';

class TrainingPlanRepository implements Repository<TrainingPlan> {
	private tableName = 'training_plans';

	create(entity: Partial<TrainingPlan>): Promise<TrainingPlan> {
		throw new Error('Method not implemented.');
	}

	async delete(id: string): Promise<void> {
		const { error } = await supabase.from(this.tableName).delete().eq('id', id);

		if (error) throw Error(error.message);
	}

	async findAll(): Promise<TrainingPlan[]> {
		const { data, error } = await supabase
			.from(this.tableName)
			.select('*')
			.order('createdAt', { ascending: false });

		if (error) throw Error(error.message);

		return data;
	}

	async findById(id: string): Promise<TrainingPlan | null> {
		const { data, error } = await supabase
			.from(this.tableName)
			.select('*, workouts ( *, exercises:workout_exercises( *, exercise:exercise_id( * ) ) )')
			.eq('id', id)
			.order('sort', { referencedTable: 'workouts' });

		if (error) throw Error(error.message);

		if (data) {
			return data[0];
		} else {
			return null;
		}
	}

	update(id: string, entity: Partial<TrainingPlan>): Promise<void> {
		throw new Error('Method not implemented.');
	}
}

export const trainingPlanRepository = new TrainingPlanRepository();
