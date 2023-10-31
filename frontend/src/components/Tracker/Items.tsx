import Timer from "./Timer"
import { useState } from "react"

export const Items = () => {
    const [obj, setObj] = useState<Record<string, number>>({})
    const handleChange = (id: string, seconds: number) => {
        setObj(val => ({ ...val, [id]: seconds }))
        console.log(JSON.stringify(obj))
    }
    return <div className=''>
        <ul>
            <li>TypeScript <Timer onChange={(seconds) => { handleChange('typescript', seconds) }} /></li>
            <li>Node - streams<Timer onChange={(seconds) => { handleChange('node', seconds) }} /></li>
            <li>Docker compose<Timer onChange={(seconds) => { handleChange('docker', seconds) }} /></li>
            <li>React - обновленная документация<Timer onChange={(seconds) => { handleChange('react', seconds) }} /></li>
        </ul>
        <div className="pt-5">
            {Object.keys(obj).map(id => {
                return (
                    <div key={id}>
                        <span>{id}</span><span className="ml-1">{obj[id]}</span>
                    </div>
                );
            })}
        </div>
    </div>
}