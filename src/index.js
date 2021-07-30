import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Login from "./pages/adminPanel";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
