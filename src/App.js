import React from "react";
import "./App.css";
import SearchCity from "./SearchCity";
import { UnitName } from "./UnitContext";

function App() {
  return (
    <UnitName>
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
    </UnitName>
  );
}

export default App;
