import {Player} from '@lottiefiles/react-lottie-player';
import {useRef} from 'react';

const GotoTop = () => {
    const playerRef = useRef(Player);

    const onmouseenter = () => {
        playerRef.current.setLoop(true);
        playerRef.current.play();
    };
    const onmouseleave = () => {
        playerRef.current.stop();
    };
    const onmouseclick = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div className='Top' onMouseEnter={onmouseenter} onMouseLeave={onmouseleave} onClick={onmouseclick}>
            <Player
                src="https://assets10.lottiefiles.com/packages/lf20_2ylbszmp.json"
                loop={false}
                autoplay={false}
                style={{height: '80px', width: '80px'}}
                ref={playerRef}
            />
        </div>
    )
}

export default GotoTop;