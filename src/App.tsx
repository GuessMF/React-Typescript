import React from "react";
import logo from "./logo.svg";
import "./App.css";

const hello: string = "Hello!";
const str: string = "This is new React-typescript project";

function App() {
  return (
    <div className="App">
      <h1>{hello}</h1>
      <h2>{str}</h2>
      <h1>Main branch testing</h1>
    </div>
  );
}

export default App;
