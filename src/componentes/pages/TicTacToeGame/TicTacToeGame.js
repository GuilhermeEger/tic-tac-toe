import React, { useEffect, useState } from "react";
import ImputSquare from "../../atoms/ImputSquare/ImputSquare"
import "./TicTacToeGame.css";
import WinnerPanel from "../../molecules/WinnerPanel/WinnerPanel";
import TicTacToeField from "../../atoms/TicTacToeField/TicTacToeField";

function TicTacToeGame(props) {
  const [xPlayerTurn, setXplayerTurn] = useState(true);
  const [fieldsValues, setValues] = useState(Array(9).fill(null));
  const [gameWinner, setGameWinner] = useState("");
  const [endGameText, setEndGameText] = useState("");
  const [showingTrophy, setShowingTrophy] = useState(false);

  function showTrophy() {
    setShowingTrophy(true);
  }

  function restartGame() {
    setValues(Array(9).fill(null));
    setShowingTrophy(false);
    setGameWinner("");
  }

  function changeValue(i) {
    if (gameWinner) return;
    if (fieldsValues[i]) return;

    let gameFields = fieldsValues;
    gameFields[i] = xPlayerTurn ? "X" : "O";

    setValues(gameFields);
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
        showTrophy();
        return setGameWinner(fieldsValues[a]);
      }
    }

    if (
      fieldsValues.every(
        (field) => field !== "" && field !== undefined && field !== null
      )
    ) {
      showTrophy();
      setGameWinner("draw")
      return setEndGameText(writeEndGameText("draw"));
    }
  }

  function writeEndGameText(winner) {
    if (winner == "draw") return "Oh, a draw!";
    else return "Player " + winner + " Win!";
  }

  return (
    <div className="gameStyle">
      <TicTacToeField fieldsValues={fieldsValues} changeValue={(value) => changeValue(value)}/>
      {showingTrophy && (
        <WinnerPanel
          gameDraw={gameWinner == "draw"}
          closeText={"Restart"}
          close={() => restartGame()}
          winnerText={endGameText}
        />
      )}
    </div>
  );
}

export default TicTacToeGame;
