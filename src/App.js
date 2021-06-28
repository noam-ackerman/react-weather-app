import "./App.css";
import SearchCity from "./SearchCity";
import Forecast from "./Forecast";

function App() {
  return (
    <div>
      <div className="Box">
        <SearchCity />
        <Forecast />
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
  );
}

export default App;
