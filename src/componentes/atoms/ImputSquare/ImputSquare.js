import React from "react";
import "./ImputSquare.css";

function ImputSquare(props) {
  return (
    <div>
      <div onClick={props.onClick} className="square">
        {props.value && (
          <>
            {props.value == "X" ? (
              <div className="XWrap">
                <div className="X rotate45" />
                <div className="X rotateNeg45" />
              </div>
            ) : (
              <div className="O" />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ImputSquare;
