import {useCallback} from 'react';
import {loadFull} from 'tsparticles';
import Particles from 'react-tsparticles';
import HTML_icon from './Image/HTML_icon.png'
import CSS_icon from './Image/CSS_icon.png'
import Javascript_icon from './Image/Javascript_icon.png'
import React_icon from './Image/React_icon.png'
import Bootstrap_icon from './Image/Bootstrap_icon.png'
import Vue_icon from './Image/Vue_icon.png'
import Angular_icon from './Image/Angular_icon.png'

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
                    fpsLimit: 120,
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
                            remove: { 
                                quantity: 2
                            },
                            bubble: { 
                                distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3
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
                            out_mode: "out",
                            enable: true,
                            random: false,
                            speed: 3,
                            straight: false,
                        },
                        rotate: {
                            animation: {
                                enable: true,
                                speed: {min: 1, max: 10},
                                sync: false
                            }
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 40,
                        },
                        opacity: {
                            anim: {enable: true, opacity_min: 0.5, speed: 1, sync: false},
                            random: false,
                            value: 1
                        },
                        shape: {
                            type: "image",
                            image:[
                                {
                                    src: HTML_icon,
                                    width: 200,
                                    height: 200,
                                },
                                {
                                    src: CSS_icon,
                                    width: 200,
                                    height: 200,
                                },
                                {
                                    src: Javascript_icon,
                                    width: 200,
                                    height: 200,
                                },
                                {
                                    src: React_icon,
                                    width: 200,
                                    height: 200,
                                },
                                {
                                    src: Bootstrap_icon,
                                    width: 200,
                                    height: 200,
                                },
                                {
                                    src: Vue_icon,
                                    width: 200,
                                    height: 200,
                                },
                                {
                                    src: Angular_icon,
                                    width: 200,
                                    height: 200,
                                }
                            ]
                            /*
                            character: {
                                fill: true,
                                value: ["</>", "Hello World", "<div>", "<p>"],
                                weight: "400"
                            },
                            type: "char"
                            */
                        },
                        size: {
                            value: {min: 5, max: 20},
                        },
                    },
                    detectRetina: true
                }}
            />
        </div>
    )
}

export default ParticlesBack;