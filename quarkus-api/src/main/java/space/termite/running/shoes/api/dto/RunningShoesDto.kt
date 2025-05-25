package space.termite.running.shoes.api.dto

import space.termite.running.shoes.model.RunningShoes
import java.util.UUID

data class RunningShoesDto(
    val currentKm: Double,
    val id: UUID,
    val maxKm: Double,
    val imageUrl: String,
    val name: String
)

fun RunningShoes.toDto(): RunningShoesDto = RunningShoesDto(
    currentKm,
    id,
    maxKm,
    imageUrl,
    name
)

fun List<RunningShoes>.toDto(): List<RunningShoesDto> = this.map { it.toDto() }