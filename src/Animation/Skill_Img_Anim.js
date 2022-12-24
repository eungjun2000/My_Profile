import React, {useState} from "react";
import {useSpring, animated} from "react-spring";

function Card({images}) {
  const [hover, setHover] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: hover ? "scale(1.03)" : "scale(1)",
    boxShadow: hover ? "0 20px 25px rgb(0 0 0 / 25%)" : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  
  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={images} alt="No Image"/>
    </animated.div>
  );
}

export default Card;