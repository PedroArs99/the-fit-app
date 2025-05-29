package space.termite.running.shoes.api.dto.commands

import space.termite.running.shoes.application.commands.CreateRunningShoesCommand

data class CreateRunningShoesDto(
    val currentKm: Double, val maxKm: Double, val imageUrl: String, val name: String
) {
    fun toCommand(): CreateRunningShoesCommand = CreateRunningShoesCommand(
        currentKm, maxKm, imageUrl, name
    )
}