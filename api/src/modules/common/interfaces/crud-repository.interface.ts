export interface CrudRepository<T> {
  create(exercise: T): Promise<T>;
  findAll(): Promise<Array<T>>;
  findById(id: number): Promise<T | undefined>;
}