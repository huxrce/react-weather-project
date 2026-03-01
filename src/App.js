import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/huxrce"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erica
        </a>
        , it's open-sourced on{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="#" target="_blank" rel="noopener noreferrer">
          Render
        </a>
      </footer>
    </div>
  );
}
