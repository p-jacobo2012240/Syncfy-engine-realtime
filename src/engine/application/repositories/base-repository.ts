
export interface IBaseRepository<T> {
    save(domain: T) : Promise<void>
}