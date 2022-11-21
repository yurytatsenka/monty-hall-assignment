import React, { FormEvent, useState } from "react"
import { twMerge } from 'tailwind-merge'
import { InputData } from "../../../shared"
import { Card } from "../atoms/Card"

const changeDoorValuesToBoolean = new Map<string, boolean>().set('yes', true).set('no', false)

export const Input = ({ onSubmit }: { onSubmit: (data: InputData) => void }) => {
    const [shouldChangeDoor, setShouldChangeDoor] = useState<boolean | undefined>()
    const [countOfGames, setCountOfGames] = useState<number | undefined>()
    const [showCountOfGamesError, setShowCountOfGamesError] = useState(false)
    const [showDoorChangeError, setShowDoorChangeError] = useState(false)
    const shouldDisableSubmitButton = showCountOfGamesError || showDoorChangeError
    const submitButtonColor = shouldDisableSubmitButton ? 'grey' : 'blue'

    const validateDoorChange = (value: boolean | undefined) => {
        return value !== undefined
    }

    const validateCountOfGames = (value: number | undefined) => {
        if (value === undefined) {
            return false
        }

        return /^[0-9\b]+$/.test(String(value)) && value > 0
    }

    const updateShouldChangeDoor = (evt: FormEvent<HTMLInputElement>) => {
        const shouldChangeDoor = changeDoorValuesToBoolean.get(evt.currentTarget.value)
        const isValid = validateDoorChange(shouldChangeDoor)

        setShowDoorChangeError(!isValid)
        setShouldChangeDoor(shouldChangeDoor)
    }

    const onCountOfGamesChange = (evt: FormEvent<HTMLInputElement>) => {
        const value = evt.currentTarget.value ? Number(evt.currentTarget.value) : undefined
        const isValid = validateCountOfGames(value)
        setShowCountOfGamesError(!isValid)
        setCountOfGames(value)
    }

    const validateForm = () => {
        let isValid = true
        if (!validateCountOfGames(countOfGames)) {
            setShowCountOfGamesError(true)
            isValid = false
        }
        if (!validateDoorChange(shouldChangeDoor)) {
            setShowDoorChangeError(true)
            isValid = false
        }

        return isValid
    }

    const onSubmitButtonClick = async (evt: FormEvent<HTMLButtonElement>) => {
        evt.preventDefault()
        const isFormValid = validateForm()
        if (isFormValid) {
            if (shouldChangeDoor === undefined) {
                throw new Error('shouldChangeDoor is not filled in')
            }
            if (countOfGames === undefined) {
                throw new Error('countOfGames is not filled in')
            }

            onSubmit({ shouldChangeDoor, countOfGames })
        }
    }

    const requiredSymbol = <span className="text-red-600 relative bottom-1">*</span>

    return <Card headerText="Enter your data">
        <form>
            <div className="mb-2">
                <div className="mb-2 text-gray-700">Count of games{requiredSymbol}</div>
                <input type="number" onChange={onCountOfGamesChange} value={countOfGames ?? ''} className="w-full px-3 py-1.5 text-gray-700 border border-solid border-gray-300 rounded focus:border-blue-600"
                    placeholder="Count of games" />
                <small className={twMerge(
                    "block mt-1 text-xs text-red-600",
                    showCountOfGamesError ? "visible" : "invisible"
                )} >Please enter the value that is greater than 0.</small>
            </div>
            <div className="mb-4">
                <div className="mb-1 text-gray-800">
                    Change the door?{requiredSymbol}
                </div>
                <div>
                    <label className="cursor-pointer">
                        <input onChange={updateShouldChangeDoor} type="radio" name="change-door" value="yes" checked={shouldChangeDoor === true} className="mb-0.5 align-middle mr-2" />
                        <span className="inline-block text-gray-800 mr-3">
                            Yes
                        </span>
                    </label>
                    <label className="cursor-pointer">
                        <input onChange={updateShouldChangeDoor} type="radio" name="change-door" value="no" checked={shouldChangeDoor === false} className="mb-0.5 align-middle mr-2" />
                        <span className="inline-block text-gray-800">
                            No
                        </span>
                    </label>
                </div>
                <small className={twMerge(
                    "block mt-1 text-xs text-red-600",
                    showDoorChangeError ? "visible" : "invisible"
                )} >Please choose the value for the door change.</small>
            </div>
            <button disabled={shouldDisableSubmitButton} onClick={onSubmitButtonClick} type="submit"
                className={twMerge(
                    "px-5 py-1.5",
                    shouldDisableSubmitButton ? 'bg-gray-400' : 'bg-blue-600',
                    "text-white font-medium text-sm uppercase rounded shadow-md",
                    !shouldDisableSubmitButton && "hover:bg-blue-700 hover:shadow-lg"
                )}>
                Submit
            </button>
        </form>
    </Card >
}