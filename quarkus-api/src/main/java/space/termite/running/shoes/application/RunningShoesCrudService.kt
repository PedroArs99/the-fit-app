package space.termite.running.shoes.application

import io.smallrye.mutiny.Uni
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import space.termite.running.shoes.model.RunningShoes

@ApplicationScoped
class RunningShoesCrudService @Inject constructor(
    val runningShoesDynamoRepository: RunningShoesRepository
) {
    fun findAll(): Uni<List<RunningShoes>> {
        return runningShoesDynamoRepository.findAll()
    }
}