import Lottie from 'lottie-react';
import {useRef} from 'react';
import GototopAnim from './Animation/Goto_top_Anim.json'

const GotoTop = () => {
    const lottieRef = useRef();

    const onmouseenter = () => {
        lottieRef.current.playSegments([0, 67], true);
    };
    const onmouseleave = () => {
        lottieRef.current.playSegments([67, 0], true);
    };
    const onmouseclick = () => {
        window.scrollTo(0, 0);
    }

    return(
        <div className='Top' onMouseEnter={onmouseenter} onMouseLeave={onmouseleave} onClick={onmouseclick}>
            <Lottie
                animationData={GototopAnim}
                loop={false}
                autoplay={false}
                style={{height: '80px', width: '80px'}}
                lottieRef={lottieRef}
            />
        </div>
    )
}

export default GotoTop;