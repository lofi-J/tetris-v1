import { useEffect } from "react"

import { Howl } from "howler";

export const useBGM = (url, isStart, level=0.5) => {
    useEffect(() => {
        const sound = new Howl({
            src: [url],
            volume: level,
            Loop: true,
        });
        if(!isStart) {
            sound.play();
        }

        return () => {
            sound.stop();
        }
    }, [url, isStart, level])
}