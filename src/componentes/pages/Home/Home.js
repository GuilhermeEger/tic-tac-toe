import React, { useState } from "react";
import TicTacToeGame from "../../pages/TicTacToeGame/TicTacToeGame";
import "./Home.css";

function Home(props) {
  return (
    <div className="home">
      <TicTacToeGame />
    </div>
  );
}

export default Home;
