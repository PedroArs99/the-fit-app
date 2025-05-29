package space.termite.running.shoes.infrastructure.entity

import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbBean
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbPartitionKey
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSecondaryPartitionKey
import software.amazon.awssdk.enhanced.dynamodb.mapper.annotations.DynamoDbSecondarySortKey
import space.termite.running.shoes.model.RunningShoes
import java.util.UUID

@DynamoDbBean
class RunningShoesEntity() {
    @get:DynamoDbSecondarySortKey(indexNames = ["CurrentKmIndex"])
    var currentKm: Double? = null
    @get:DynamoDbPartitionKey
    var id: UUID? = null
    var maxKm: Double? = null
    var imageUrl: String? = null
    var name: String? = null

    @get:DynamoDbSecondaryPartitionKey(indexNames = ["CurrentKmIndex"])
    var gsiPartition: String = "CurrentKmIndex"

    constructor(
        currentKm: Double,
        id: UUID,
        maxKm: Double,
        imageUrl: String,
        name: String
    ) : this() {
        this.currentKm = currentKm
        this.id = id
        this.maxKm = maxKm
        this.imageUrl = imageUrl
        this.name = name
    }

    fun toDomain(): RunningShoes = RunningShoes(
        currentKm = currentKm ?: throw RuntimeException("Error: Missing currentKm!"),
        id = id ?: throw RuntimeException("Error: Missing id!"),
        maxKm = maxKm ?: throw RuntimeException("Error: Missing maxKm!"),
        imageUrl = imageUrl ?: throw RuntimeException("Error: Missing imageUrl!"),
        name = name ?: throw RuntimeException("Error: Missing name!"),
    )
}

fun RunningShoes.toEntity() = RunningShoesEntity(
    currentKm, id, maxKm, imageUrl, name
)