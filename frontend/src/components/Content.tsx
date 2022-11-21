import { Input } from "./Input"
import { Output } from "./Output"
import { ApiMontyhallSimulatePostRequest, Configuration, DefaultApi, InputData, OutputData } from "../../../shared"
import { useState } from "react"

export const Content = () => {
    const [outputData, setOutputData] = useState<OutputData>()

    const onInputSubmit = async (data: InputData) => {

        const api = new DefaultApi(new Configuration({
            basePath: import.meta.env.VITE_APP_API_HOST,
        }))

        const result = await api.apiMontyhallSimulatePost(
            { simulateGamesRequest: { inputData: data } } as ApiMontyhallSimulatePostRequest
        )

        setOutputData(result.outputData)
    }

    return <div className='flex flex-row items-stretch flex-wrap justify-center w-full min-w-min'>
        <Input onSubmit={onInputSubmit} />
        {!!outputData && <Output {...outputData} />}
    </div>
}