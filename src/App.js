import React from "react";
import "./styles/App.css";
import SearchCity from "./components/SearchCity";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Box">
          <SearchCity defaultCity="tokyo" />
        </div>
        <p className="sourceLine">
          <a
            href="https://github.com/noam-ackerman/react-weather-app"
            target="_blank"
            rel="noreferrer"
            className="codeLink"
          >
            Open-source code
          </a>{" "}
          designed and built by{" "}
          <a
            href="https://www.linkedin.com/in/noam-ackerman/"
            target="_blank"
            rel="noreferrer"
            className="codeLink"
          >
            Noam Ackerman
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
