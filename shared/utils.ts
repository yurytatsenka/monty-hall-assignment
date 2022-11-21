import Big from 'big.js'

export const getPercentage = (
    { partialAmount,
        totalAmount,
        precision }: {
            partialAmount: number,
            totalAmount: number,
            precision?: number
        }
): number => {
    return totalAmount === 0
        ? 0
        : new Big((partialAmount / totalAmount) * 100).round(precision).toNumber()
}

export const getRandomValue = (allowedValues: number[]): number => {
    return allowedValues[Math.floor(Math.random() * allowedValues.length)]
};