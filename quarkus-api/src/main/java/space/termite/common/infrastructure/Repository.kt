package space.termite.common.infrastructure

import io.smallrye.mutiny.Uni

interface Repository<T> {
    fun findAll(): Uni<List<T>>
}