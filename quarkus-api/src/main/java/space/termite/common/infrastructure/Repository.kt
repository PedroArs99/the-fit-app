package space.termite.common.infrastructure

import io.smallrye.mutiny.Uni

interface Repository<T> {
    fun create(domainObject: T): Uni<T>
    fun findAll(): Uni<List<T>>
}