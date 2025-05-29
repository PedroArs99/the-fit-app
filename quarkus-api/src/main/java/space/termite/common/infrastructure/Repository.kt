package space.termite.common.infrastructure

import io.smallrye.mutiny.Uni
import java.util.*

interface Repository<T> {
    fun create(domainObject: T): Uni<T>
    fun findAll(): Uni<List<T>>
    fun findById(id: UUID): Uni<T>
}