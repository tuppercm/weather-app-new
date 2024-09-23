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
          Coded by Caitlin Tupper, open-sourced on{" "}
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
          <br />
          Photo by{" "}
          <a href="https://unsplash.com/@mischievous_penguins?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Casey Horner
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/low-angle-photography-of-trees-at-daytime-4rDCa5hBlCs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
