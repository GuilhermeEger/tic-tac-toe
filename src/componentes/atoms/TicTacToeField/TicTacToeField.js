import React, { useEffect, useState } from "react";
import ImputSquare from "../ImputSquare/ImputSquare";
import "./TicTacToeField.css";

function TicTacToeField(props) {

  return (
    <div className="gameStyle">
      <div>
        <div className="fieldStyle">
          <div>
            <ImputSquare
              onClick={() => props.changeValue(0)}
              value={props.fieldsValues[0]}
            />
            <ImputSquare
              onClick={() => props.changeValue(1)}
              value={props.fieldsValues[1]}
            />
            <ImputSquare
              onClick={() => props.changeValue(2)}
              value={props.fieldsValues[2]}
            />
          </div>
          <div>
            <ImputSquare
              onClick={() => props.changeValue(3)}
              value={props.fieldsValues[3]}
            />
            <ImputSquare
              onClick={() => props.changeValue(4)}
              value={props.fieldsValues[4]}
            />
            <ImputSquare
              onClick={() => props.changeValue(5)}
              value={props.fieldsValues[5]}
            />
          </div>
          <div>
            <ImputSquare
              onClick={() => props.changeValue(6)}
              value={props.fieldsValues[6]}
            />
            <ImputSquare
              onClick={() => props.changeValue(7)}
              value={props.fieldsValues[7]}
            />
            <ImputSquare
              onClick={() => props.changeValue(8)}
              value={props.fieldsValues[8]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToeField;
