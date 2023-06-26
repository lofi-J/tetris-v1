import { useEffect } from "react";

import { useSelector } from "react-redux";

import { Howl } from "howler";

export const useBGM = (url, isStart, level=0.5) => {
    const isMute = useSelector((store) => store.isMute.value);
    useEffect(() => {
        if(isMute) return;

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
    }, [url, isStart, level, isMute])
}