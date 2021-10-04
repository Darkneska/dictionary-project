import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     <header className="App-header">
      <img src="https://i.pinimg.com/originals/95/1a/5c/951a5cec4316bdc23b41adb6428d2284.gif" alt="main"></img>
      <h1>What word do you want to look up?</h1>
      <Dictionary defaultKeyword="sunset" />
     </header>
    </div>
    <footer><a
        href="https://github.com/Darkneska/dictionary-project"
        target="_blank"
        rel="noreferrer"
        className="source"
      >
        Open-sourced on GitHub
      </a>{" "}
      by Denisa Pavlikova{" "}
      <a
        href="https://cranky-engelbart-c691eb.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="source"
      >
        hosted on Netlify
      </a></footer>
    </div>
  );
}


