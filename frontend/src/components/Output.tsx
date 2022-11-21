import React from "react"
import { OutputData } from "../../../shared"
import { Card } from "../atoms/Card"

export const Output = ({ percentWon, percentLost }: OutputData) => <Card headerText="Results">
    <div className="text-2xl pb-4">won: <span className="text-green-600">{percentWon}%</span></div>
    <div className="text-2xl pb-4">lost: <span className="text-red-600">{percentLost}%</span></div>
</Card> 