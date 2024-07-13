export interface CrudRepository<T> {
  create(exercise: T): Promise<T>;
  delete(id: number): Promise<void>;
  findAll(): Promise<Array<T>>;
  findById(id: number): Promise<T | undefined>;
}