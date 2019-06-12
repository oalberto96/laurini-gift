import React, { Component } from "react";
import "./App.css";
// import YouWonScreen from "./features/play/YouWonScreen";
import Board from "./features/play/Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
