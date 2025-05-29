package space.termite.running.shoes.application

import io.smallrye.mutiny.Uni
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import space.termite.running.shoes.application.commands.CreateRunningShoesCommand
import space.termite.running.shoes.model.RunningShoes
import java.util.*

@ApplicationScoped
class RunningShoesCrudService @Inject constructor(
    val runningShoesDynamoRepository: RunningShoesRepository
) {
    fun create(command: CreateRunningShoesCommand): Uni<RunningShoes> {
        val newShoes = RunningShoes(
            currentKm = command.currentKm,
            id = UUID.randomUUID(),
            maxKm = command.maxKm,
            imageUrl = command.imageUrl,
            name = command.name
        )

        return runningShoesDynamoRepository.create(newShoes)
    }

    fun findAll(): Uni<List<RunningShoes>> {
        return runningShoesDynamoRepository.findAll()
    }

    fun findById(id: UUID): Uni<RunningShoes> {
        return runningShoesDynamoRepository.findById(id)
    }
}