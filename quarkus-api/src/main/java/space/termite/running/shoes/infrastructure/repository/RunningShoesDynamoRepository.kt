package space.termite.running.shoes.infrastructure.repository

import io.quarkiverse.amazon.dynamodb.enhanced.runtime.NamedDynamoDbTable
import io.smallrye.mutiny.Multi
import io.smallrye.mutiny.Uni
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import org.reactivestreams.FlowAdapters
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbAsyncTable
import space.termite.running.shoes.application.RunningShoesRepository
import space.termite.running.shoes.infrastructure.entity.RunningShoesEntity
import space.termite.running.shoes.model.RunningShoes

@ApplicationScoped
class RunningShoesDynamoRepository @Inject constructor(
    @NamedDynamoDbTable("TheFitApp-RunningShoes") val runningShoesTable: DynamoDbAsyncTable<RunningShoesEntity>
) : RunningShoesRepository {

    override fun findAll(): Uni<List<RunningShoes>> {
        val result = runningShoesTable.scan().items();

        return Multi
            .createFrom()
            .publisher(FlowAdapters.toFlowPublisher(result))
            .map { it.toDomain() }
            .collect()
            .asList()
    }
}