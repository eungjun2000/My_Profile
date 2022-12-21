import React, {useRef} from 'react';
import '../Navigation_bar/Nav_menu.js'
import Lottie from 'lottie-react';
import SunMoonAnim from '../Animation/Sun_moon_Anim.json'

const Dark_mode_toggle = ({theme, toggleTheme}) => {
    const lottieRef = useRef();

    const Light_to_Dark = () => {
        if(theme === 'Dark'){
            lottieRef.current.setSpeed(1.5);
            lottieRef.current.playSegments([0, 55], true);
        }else{
            lottieRef.current.setSpeed(1.5);
            lottieRef.current.playSegments([55, 115], true);
        }
    }

    return(
        <div onClick={toggleTheme}>
            <div onClick={Light_to_Dark}>
                <Lottie
                    animationData={SunMoonAnim}
                    style={{
                        top: 8,
                        right: 10,
                        height: '80px',
                        width: '80px',
                        position: 'fixed',
                        display: 'flex',
                        cursor: 'pointer'
                    }}
                    autoplay={false}
                    loop={false}
                    lottieRef={lottieRef}
                />
            </div>
        </div>
    )
}

export default Dark_mode_toggle;