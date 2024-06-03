import React, { useState } from "react";
import TicTacToeField from "../../organisms/TicTacToeField/TicTacToeField";
import "./Home.css";

function Home(props) {
  const [layout,setLayout] = useState("simple");



  return (
    <div className="home">
      <TicTacToeField />
    </div>
  );
}

export default Home;
