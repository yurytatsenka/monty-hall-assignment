import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

const Timer = ({ onChange }: { onChange: (value: number) => void }) => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive);
    }

    function reset() {
        setSeconds(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval: number | undefined;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                onChange(seconds + 1)
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div>
            {/* <h1>{seconds}s</h1> */}
            <button className={twMerge(
                "px-2 py-1 ml-3",
                isActive ? 'bg-green-600' : 'bg-blue-400',
                "text-white font-medium text-sm uppercase rounded shadow-md",
            )} onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
            {/* <button onClick={reset}>Reset</button> */}
        </div>
    );
};

export default Timer;

{/* <button className={twMerge(
    "px-2 py-1 ml-3",
    'bg-blue-400',
    "text-white font-medium text-sm uppercase rounded shadow-md",
)}>start</button> */}