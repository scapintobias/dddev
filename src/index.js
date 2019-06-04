import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./styles.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
      <Inventory />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
