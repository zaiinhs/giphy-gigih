import logo from "./logo.svg";
import "./App.css";

function App() {
  const giphyApi = process.env.REACT_APP_GIPHY;
  console.log(giphyApi);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
