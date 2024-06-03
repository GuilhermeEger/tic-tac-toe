import React from "react";
import AnimationRender from "../../atoms/AnimationRender/AnimationRender";
import "./WinnerPanel.css";

function WinnerPanel(props) {
  return (
    <div className="winnerModal">
      <div className="wrapPanel">
        <div className="modalX" onClick={() => props.close()}>x</div>
        <div className="winnerText">{props.winnerText}</div>
        <AnimationRender className="animation" name={"winner"} />
        <div onClick={() => props.close()} className="close">{props.closeText}</div>
      </div>
    </div>
  );
}

export default WinnerPanel;
