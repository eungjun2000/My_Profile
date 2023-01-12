import {useCallback} from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';
import Univ from './Image/University.gif'

const ParticlesBack = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        console.log(container);
    }, []);

    return(
        <div className='particle_container'>
            <Particles className='particle_container'
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 240,
                    fullScreen: false,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#333",
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        rotate: {
                            animation: {
                                enable: true,
                                speed: {min: 1, max: 10}
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 50,
                        },
                        opacity: {
                            anim: {enable: true, opacity_min: 0.5, speed: 1, sync: false},
                            random: false,
                            value: 1
                        },
                        shape: {
                            character: {
                                fill: true,
                                value: ["</>", "Hello World", "<div>", "<p>"],
                                weight: "400"
                            },
                            type: "char"    
                        },
                        size: {
                            value: {min: 5, max: 15},
                        },
                    },
                    detectRetina: true
                }}
            />
        </div>
    )
}

export default ParticlesBack;