import {useEffect, useRef} from "react";

const Mouse = () => {
    const headRef = useRef(null);
    const secondRef = useRef(null);
    const tailRef = useRef([]);

    //const pointer = {x:0, y:0};

    tailRef.current.forEach(cursor => {
        cursor.x = 0;
        cursor.y = 0;
    });

    const pointerRef = useRef({
        x : 0,
        y : 0,
        destx : 0,
        desty : 0,
        distx : 0,
        disty : 0,
        key : -1
    });

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;

            pointerRef.current.x = x - secondRef.current.clientWidth / 2;
            pointerRef.current.y = y - secondRef.current.clientHeight / 2;

            headRef.current.style.transform = `translate3d(${x - headRef.current.clientWidth/2}px, ${y - headRef.current.clientHeight/2}px, 0)`;
        });
    }, [])


    useEffect(() => {
        const cursor_follow = () => {
            pointerRef.current.key = requestAnimationFrame(cursor_follow);

            const {x, y, destx, desty, distx, disty} = pointerRef.current;

            if(!destx | !desty){
                pointerRef.current.destx = x;
                pointerRef.current.desty = y;
            }else{
                pointerRef.current.distx = (x - destx) * 0.1;
                pointerRef.current.disty = (y - desty) * 0.1;

                if(Math.abs(pointerRef.current.distx) + Math.abs(pointerRef.current.disty) < 0.1){
                    pointerRef.current.destx = x;
                    pointerRef.current.desty = y;
                }else{
                    pointerRef.current.destx += distx;
                    pointerRef.current.desty += disty;
                }
            }
            secondRef.current.style.transform = `translate3d(${destx}px, ${desty}px, 0)`;   
        }
        cursor_follow();
    }, [])

    /*
    function pointer(){
        let x = axis.x;
        let y = axis.y;

            tailRef.current.forEach(function(cursor, index){
                //console.log(cursor);
                //cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
                cursor.style.left = `${x-12}px`;
                cursor.style.top = `${y-12}px`;

                cursor.style.scale = (tailRef.current.length - index) / (tailRef.current.length);

                cursor.x = x;
                cursor.y = y;

                const cursor_follow = tailRef.current[index + 1] || tailRef.current[0];
                
                x += (cursor_follow.x - x) * 0.5;
                y += (cursor_follow.y - y) * 0.5;
            })
    }
    */

    return(
        <div>
            <div className="cursor" ref={headRef}></div>
            <div className="cursor2" ref={secondRef}></div>
        </div>
    )
}

export default Mouse;