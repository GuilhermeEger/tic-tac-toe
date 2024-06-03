import React from "react";
import "./ImputSquare.css";

function ImputSquare(props) {
  return (
    <div>
      <div onClick={props.onClick} className="square">{props.value}</div>
    </div>
  );
}

export default ImputSquare;
