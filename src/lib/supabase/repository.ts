export interface SupabaseRepository<T> {
  create(entity: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  update(id: string, entity: Partial<T>): Promise<void>
}