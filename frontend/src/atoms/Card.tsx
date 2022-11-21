import React from "react"

export const Card = ({ children, headerText }: {
    children: any, headerText: string
}) => <div className="mx-9 my-2 p-6 rounded-lg shadow-lg w-full md:mx-4 md:w-80 min-w-max">
        <div className="text-3xl pb-2">{headerText}</div>
        <hr className="pb-5"></hr>
        {children}
    </div>