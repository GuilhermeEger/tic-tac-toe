import React, { useEffect, useState } from "react";
import ImputSquare from "../../atoms/ImputSquare/ImputSquare";
import "./TicTacToeField.css";

function TicTacToeField(props) {
  const [xPlayerTurn, setXplayerTurn] = useState(true);
  const [fieldsValues, setValue] = useState(Array(9).fill(""));
  const [gameWinner, setGameWinner] = useState("");
  const [endGameText, setEndGameText] = useState("");

  function changeValue(i) {
    if (gameWinner) return;
    if (fieldsValues[i]) return;

    let gameFields = fieldsValues;
    gameFields[i] = xPlayerTurn ? "X" : "O";

    setValue(gameFields);
    setXplayerTurn(!xPlayerTurn);
    checkWinner();
  }

  function checkWinner() {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];

      if (
        fieldsValues[a] &&
        fieldsValues[a] == fieldsValues[b] &&
        fieldsValues[a] == fieldsValues[c]
      ) {
        setEndGameText(writeEndGameText(fieldsValues[a]));
        return setGameWinner(fieldsValues[a]);
      }
    }

    if (
      fieldsValues.every(
        (field) => field !== "" && field !== undefined && field !== null
      )
    )
      return setEndGameText(writeEndGameText("draw"));
  }

  function writeEndGameText(winner) {
    if (winner == "draw") return "Oh, a draw!";
    else return "Player playing with " + winner + " Win!";
  }

  return (
    <div className="gameStyle">
      <div>
        <div className="fieldStyle">
          <div>
            <ImputSquare
              onClick={() => changeValue(0)}
              value={fieldsValues[0]}
            />
            <ImputSquare
              onClick={() => changeValue(1)}
              value={fieldsValues[1]}
            />
            <ImputSquare
              onClick={() => changeValue(2)}
              value={fieldsValues[2]}
            />
          </div>
          <div>
            <ImputSquare
              onClick={() => changeValue(3)}
              value={fieldsValues[3]}
            />
            <ImputSquare
              onClick={() => changeValue(4)}
              value={fieldsValues[4]}
            />
            <ImputSquare
              onClick={() => changeValue(5)}
              value={fieldsValues[5]}
            />
          </div>
          <div>
            <ImputSquare
              onClick={() => changeValue(6)}
              value={fieldsValues[6]}
            />
            <ImputSquare
              onClick={() => changeValue(7)}
              value={fieldsValues[7]}
            />
            <ImputSquare
              onClick={() => changeValue(8)}
              value={fieldsValues[8]}
            />
          </div>
        </div>
        {endGameText && <div className="winnerScoreboard">{endGameText}</div>}
      </div>
    </div>
  );
}

export default TicTacToeField;
