import { useEffect } from "react";
import { useState } from "react";
export const useClock = () => {
    const [time, setTime] = useState('');

    useEffect( () => {
        const interval = setInterval( () => {
            const date = new Date();
            const formattedTime = date.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: false
            });
            setTime(formattedTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return time;
}