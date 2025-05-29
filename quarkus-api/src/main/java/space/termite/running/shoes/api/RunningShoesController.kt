package space.termite.running.shoes.api

import io.quarkus.vertx.web.Body
import io.quarkus.vertx.web.Param
import io.quarkus.vertx.web.Route
import io.smallrye.mutiny.Uni
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import space.termite.running.shoes.api.dto.RunningShoesDto
import space.termite.running.shoes.api.dto.commands.CreateRunningShoesDto
import space.termite.running.shoes.api.dto.toDto
import space.termite.running.shoes.application.RunningShoesCrudService
import java.util.UUID

@ApplicationScoped
class RunningShoesController @Inject constructor(
    val runningShoesCrudService: RunningShoesCrudService
) {
    @Route(path = "/running/shoes", methods = [Route.HttpMethod.GET])
    fun getRunningShoes(): Uni<List<RunningShoesDto>> {
        return runningShoesCrudService.findAll().map { it.toDto() }
    }

    @Route(path = "/running/shoes/:id", methods = [Route.HttpMethod.GET])
    fun getRunningShoesById(@Param id: String): Uni<RunningShoesDto> {
        return runningShoesCrudService.findById(UUID.fromString(id)).map { it.toDto() }
    }

    @Route(path = "/running/shoes", methods = [Route.HttpMethod.POST])
    fun addRunningShoes(@Body body: CreateRunningShoesDto): Uni<RunningShoesDto> {
        return runningShoesCrudService.create(body.toCommand()).map { it.toDto() }
    }
}
