package space.termite.running.shoes.infrastructure.repository

import io.quarkiverse.amazon.dynamodb.enhanced.runtime.NamedDynamoDbTable
import io.smallrye.mutiny.Multi
import io.smallrye.mutiny.Uni
import jakarta.enterprise.context.ApplicationScoped
import jakarta.inject.Inject
import org.eclipse.microprofile.config.inject.ConfigProperty
import org.reactivestreams.FlowAdapters
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbAsyncTable
import software.amazon.awssdk.enhanced.dynamodb.DynamoDbEnhancedAsyncClient
import software.amazon.awssdk.enhanced.dynamodb.Key
import software.amazon.awssdk.enhanced.dynamodb.TableSchema
import software.amazon.awssdk.enhanced.dynamodb.model.QueryConditional
import software.amazon.awssdk.enhanced.dynamodb.model.QueryEnhancedRequest
import software.amazon.awssdk.enhanced.dynamodb.model.ScanEnhancedRequest
import space.termite.running.shoes.application.RunningShoesRepository
import space.termite.running.shoes.infrastructure.entity.RunningShoesEntity
import space.termite.running.shoes.infrastructure.entity.toEntity
import space.termite.running.shoes.model.RunningShoes
import java.util.UUID

@ApplicationScoped
class RunningShoesDynamoRepository @Inject constructor(
    @ConfigProperty(name = "app.dynamodb.running-shoes-table-name")
    private val tableName: String,
    private val dynamoDbEnhancedAsyncClient: DynamoDbEnhancedAsyncClient,
) : RunningShoesRepository {

    private val runningShoesTable =
        dynamoDbEnhancedAsyncClient
            .table(tableName, TableSchema.fromClass(RunningShoesEntity::class.java))


    override fun create(domainObject: RunningShoes): Uni<RunningShoes> {
        val entity = domainObject.toEntity();

        val result = runningShoesTable.putItem(entity).thenApply { domainObject };

        return Uni.createFrom().future { result }
    }

    override fun findAll(): Uni<List<RunningShoes>> {
        val query = QueryConditional.keyEqualTo(Key.builder().partitionValue("CurrentKmIndex").build())
        val request = QueryEnhancedRequest
            .builder()
            .queryConditional(query)
            .scanIndexForward(false)
            .build()
        val result = runningShoesTable.index("CurrentKmIndex").query(request)

        return Multi
            .createFrom()
            .publisher(FlowAdapters.toFlowPublisher(result))
            .map { it.items() }
            .collect()
            .asList()
            .map { it.flatten().map { entity -> entity.toDomain() } }
    }

    override fun findById(id: UUID): Uni<RunningShoes> {
        val partitionKey = Key.builder().partitionValue(id.toString()).build()
        val result = runningShoesTable.getItem(partitionKey).thenApply { it.toDomain() }

        return Uni.createFrom().future(result)
    }
}