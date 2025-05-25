package space.termite.running.shoes.model

import java.util.*

data class RunningShoes(
    val currentKm: Double,
    val id: UUID,
    val maxKm: Double,
    val imageUrl: String,
    val name: String
)