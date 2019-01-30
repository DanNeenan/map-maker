import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Routes from './Routes'
import "./styles/App.css";

class App extends Component {
  constructor (props) {
    super(props)

    window.localStorage.setItem("points", JSON.stringify([]))
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;
