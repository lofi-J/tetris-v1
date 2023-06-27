import "../css/Particle.css"

import { useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";


const Particle = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            canvasClassName="canvas"
            init={particlesInit}
            options={{
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#000",
                    },
                    links: {
                        enable: false,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "none",
                        },
                        random: false,
                        speed: 3,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                        max: 100,
                    },
                    opacity: {
                        value: 1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                emitters: {
                    autoPlay: true,
                    direction: "center",
                    rate: {
                        quantity: 10,
                        delay: 2,
                    },
                    size: {
                        value: 1,
                    },
                    life: {
                        duration: 0.5,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default Particle;