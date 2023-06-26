import { useEffect } from "react";

import { useSelector } from "react-redux";

import { Howl } from "howler";



export const usePlaySound = (url, isPlaying, gameOver, level=.5) => {    
    const isMute = useSelector((store) => store.isMute.value);
    useEffect(() => {
        if(isMute) return;

        const bgSound = new Howl({
            src: [url],
            volume: level,
            loop: true,
        });
        if(isPlaying) {
            if(gameOver) { return () => bgSound.stop() }

            bgSound.play();
        }

        return () => {
            bgSound.stop();
        };
    }, [url, isPlaying, gameOver,level, isMute]);

    return null;
}