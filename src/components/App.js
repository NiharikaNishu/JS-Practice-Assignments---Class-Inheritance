import React, { Component, useState } from "react";
import "../styles/App.css";
import circle from "./circle";
import shape from "./shape";
class App extends Component {
  render() {
    return (
      <>
        <circle />
        <shape />
      </>
    );
  }
}

export default App;
