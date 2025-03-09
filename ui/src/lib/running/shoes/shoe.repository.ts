
import type { Repository } from '../../supabase/repository';
import type { Shoe } from './shoe.model';
import { apiClient } from '../../api/client';

class ShoeRepository implements Repository<Shoe> {
  create(entity: Partial<Shoe>): Promise<Shoe> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findAll(): Promise<Shoe[]> {
    const { data, status, statusText } = await apiClient.get('running/shoes')

    if (status > 400) throw Error(statusText);

    return data;
  }

  async findById(id: string): Promise<Shoe | null> {
    throw new Error('Method not implemented.');
  }

  update(id: string, entity: Partial<Shoe>): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export const shoeRepository = new ShoeRepository();
