import {useCallback} from 'react';
import {loadFull} from 'tsparticles';
import Particles from 'react-tsparticles';

const ParticlesStar = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {}, []);

    return(
        <div className='particle_container'>
            <Particles className='particle_container'
                id="tsparticles_star"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: -1
                    },
                    backgroundMode: {
                        enable: true
                    },
                    fpsLimit: 120,
                    particles: {
                        groups: {
                            z5000: {
                                number: {
                                    value: 70
                                },
                                zIndex: {
                                    value: 5000
                                }
                            },
                            z7500: {
                                number: {
                                    value: 30
                                },
                                zIndex: {
                                    value: 75
                                }
                            },
                            z2500: {
                                number: {
                                    value: 50
                                },
                                zIndex: {
                                    value: 25
                                }
                            },
                            z1000: {
                                number: {
                                    value: 40
                                },
                                zIndex: {
                                    value: 10
                                }
                            }
                        },
                        number: {
                            value: 150,
                            density: {
                                enable: false,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#fff",
                            animation: {
                                enable: false,
                                speed: 20,
                                sync: true
                            }
                        },
                        shape: {
                            type: "circle"
                        },
                        opacity: {
                            value: 1,
                            random: false,
                            animation: {
                                enable: false,
                                speed: 3,
                                minimumValue: 0.1,
                                sync: false
                            }
                        },
                        size: {
                            value: 3
                        },
                        links: {
                            enable: false,
                            distance: 100,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            angle: {
                                value: 10,
                                offset: 0
                            },
                            enable: true,
                            speed: 2,
                            direction: "right",
                            random: false,
                            straight: true,
                            outModes: {
                                default: "out"
                            },
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200
                            }
                        },
                        opacity: {
                            "value": 1,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 0.2,
                                "opacity_min": 0,
                                "sync": false
                            }
                        },
                        zIndex: {
                            value: 5,
                            opacityRate: 0.5
                        }
                    },
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble"
                            },
                            resize: true
                        },
                        modes : {
                            bubble: {
                                "distance": 83.91608391608392,
                                "size": 1,
                                "duration": 3,
                                "opacity": 1,
                                "speed": 3
                            },
                        }
                    },
                    detectRetina: true,
                    background: {
                        color: "#17182f",
                        image: "",
                        repeat: "no-repeat",
                        size: "cover"
                    },
                }}
            />
        </div>
    )
}

export default ParticlesStar;