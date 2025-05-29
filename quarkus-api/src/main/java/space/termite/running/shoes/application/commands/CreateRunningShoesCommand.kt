package space.termite.running.shoes.application.commands

data class CreateRunningShoesCommand(
    val currentKm: Double,
    val maxKm: Double,
    val imageUrl: String,
    val name: String
)