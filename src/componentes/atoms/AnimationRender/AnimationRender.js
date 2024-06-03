import React from "react"
import Lottie from "lottie-react";
import winnerAnimation from "../../../utils/animationsMap"

function AnimationRender(props){
  return (
    <div>
      <Lottie className={props.className} animationData={winnerAnimation[props.name]} loop={true} />
    </div>
  )
};

export default AnimationRender;
