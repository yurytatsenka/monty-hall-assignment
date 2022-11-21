import { getPercentage, getRandomValue } from "../../shared/utils";
import { SimulateGamesRequest, SimulateGamesResponse } from "../../shared/openapi/models";

const simulateGame = (
    possibleAnswers: number[], shouldChangeDoor: boolean
): { hasWon: boolean } => {
    const correctDoor = getRandomValue(possibleAnswers)
    let selectedDoor = getRandomValue(possibleAnswers)
    if (selectedDoor !== correctDoor && shouldChangeDoor) {
        const remainingAnswers = possibleAnswers.filter(item => item !== selectedDoor)
        selectedDoor = getRandomValue(remainingAnswers)
    }
    return { hasWon: selectedDoor === correctDoor }
}

const possibleAnswers = [1, 2, 3]
const percentagePrecision = 2

export const simulateGames = (
    { inputData: { countOfGames, shouldChangeDoor } }: SimulateGamesRequest
): SimulateGamesResponse => {
    let gamesWon = 0

    for (let i = 0; i < countOfGames; i++) {
        const { hasWon } = simulateGame(possibleAnswers, shouldChangeDoor)
        gamesWon += Number(hasWon)
    }

    const gamesLost = countOfGames - gamesWon

    const getCurrentPercentage = (partialAmount: number) => getPercentage(
        { partialAmount, totalAmount: countOfGames, precision: percentagePrecision }
    )

    return {
        outputData: {
            percentWon: getCurrentPercentage(gamesWon),
            percentLost: getCurrentPercentage(gamesLost)
        }
    }
}