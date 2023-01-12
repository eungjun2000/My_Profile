import {useEffect, useRef} from "react";

const Mouse = () => {
    const headRef = useRef(null);
    const outerRef = useRef(null);

    const pointerRef = useRef({
        x : 0,
        y : 0,
        destx : 0,
        desty : 0,
        distx : 0,
        disty : 0
    });

    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;

            pointerRef.current.x = x - outerRef.current.clientWidth / 1.9;
            pointerRef.current.y = y - outerRef.current.clientHeight / 1.9;

            headRef.current.style.transform = `translate3d(${x - headRef.current.clientWidth/2}px, ${y - headRef.current.clientHeight/2}px, 0)`;
        });
    }, [])

    useEffect(() => {
        const cursor_follow = () => {
            requestAnimationFrame(cursor_follow);

            const {x, y, destx, desty, distx, disty} = pointerRef.current;

            if(!destx | !desty){
                pointerRef.current.destx = x;
                pointerRef.current.desty = y;
            }else{
                pointerRef.current.distx = (x - destx) * 0.04;
                pointerRef.current.disty = (y - desty) * 0.04;

                if(Math.abs(pointerRef.current.distx) + Math.abs(pointerRef.current.disty) < 0.1){
                    pointerRef.current.destx = x;
                    pointerRef.current.desty = y;
                }else{
                    pointerRef.current.destx += distx;
                    pointerRef.current.desty += disty;
                }
            }
            outerRef.current.style.transform = `translate3d(${destx}px, ${desty}px, 0)`;
        }
        cursor_follow();
    }, [])

    return(
        <div>
            <div className="cursor" ref={headRef}></div>
            <div className="cursor_outer" ref={outerRef}></div>
        </div>
    )
}

export default Mouse;