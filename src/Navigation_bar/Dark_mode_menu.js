import React, {useRef} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import './Nav_style.css';
import '../theme.js'
import './Nav_menu.js'

const Dark_mode_menu = (props) => {
    const playerRef = useRef(Player);
    let isDarkMode = false;

    const Light_to_Dark = () => {
        if(!isDarkMode){
            playerRef.current.setPlayerDirection(1);
            playerRef.current.setSeeker(50, true);
            playerRef.current.play();
            isDarkMode = true;
        }else{
            playerRef.current.setPlayerDirection(-1);
            playerRef.current.setSeeker(80, true);
            playerRef.current.play();
            isDarkMode = false;
        }
    }

    return(
        <div onClick={Light_to_Dark}>
            <Player
                src="https://assets8.lottiefiles.com/packages/lf20_gjedw3tk.json"
                style={{height: '100px', width: '90px'}}
                ref={playerRef}
            />
        </div>
    )
}

export default Dark_mode_menu;