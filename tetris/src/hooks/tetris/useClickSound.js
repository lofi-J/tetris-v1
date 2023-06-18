import { Howl } from "howler";

export const clickSound = (level=0.2) => {
    const sound = new Howl({
        src: ["/sound/tabSound.wav"],
        volume: level,
        loop: false,
    })
    sound.play();
}