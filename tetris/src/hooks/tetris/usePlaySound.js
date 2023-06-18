import { useEffect } from "react"

import { Howl } from "howler";



export const usePlaySound = (url, isPlaying, gameOver, level=.5) => {    

    useEffect(() => {
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
    }, [url, isPlaying, gameOver,level]);

    return null;
}