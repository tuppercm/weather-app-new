import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div class="container">
        <header className="App-header">
          <Weather defaultCity="New York" />
        </header>
        <footer>
          Coded by Caitlin Tupper. Open-sourced on{" "}
          <a
            href="https://github.com/tuppercm/weather-app-new"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , and hosted on{" "}
          <a
            href="https://ctup-weather-react-app-new.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
