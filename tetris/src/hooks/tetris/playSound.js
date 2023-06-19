import { Howl } from "howler";

export const playSound = (url, level=0.2) => {
    const sound = new Howl({
        src: [url],
        volume: level,
        loop: false,
    })
    sound.play();
}