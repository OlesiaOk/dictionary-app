import "./App.css";
import logo from "./logo.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/OlesiaOk/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Olesia Okhrimenko{" "}
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
