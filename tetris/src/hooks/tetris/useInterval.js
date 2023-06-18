import { useEffect, useRef } from "react";

export const useInterval = (callback, dropTime) => {
    const callbackRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        const drop = () => {
            callbackRef.current();
        }
        if(dropTime != null) {
            const id = setInterval(drop, dropTime);
            return () => { clearInterval(id) }
        }
    }, [dropTime])
 }