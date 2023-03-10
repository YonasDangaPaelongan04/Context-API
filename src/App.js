import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todos from "./components/Todos";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Context API </p>
        <Todos />
        <Form />
      </header>
    </div>
  );
}

export default App;
