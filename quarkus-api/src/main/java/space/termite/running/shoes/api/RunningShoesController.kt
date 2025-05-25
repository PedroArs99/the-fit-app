package space.termite.running.shoes.api

import io.quarkus.vertx.web.Route
import io.smallrye.mutiny.Uni
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import space.termite.running.shoes.api.dto.RunningShoesDto
import space.termite.running.shoes.api.dto.toDto
import space.termite.running.shoes.application.RunningShoesCrudService

@ApplicationScoped
class RunningShoesController @Inject constructor(
    val runningShoesCrudService: RunningShoesCrudService
) {
    @Route(path = "/running/shoes", methods = [Route.HttpMethod.GET])
    fun getRunningShoes(): Uni<List<RunningShoesDto>> {
        return runningShoesCrudService.findAll().map { it.toDto() }
    }
}
