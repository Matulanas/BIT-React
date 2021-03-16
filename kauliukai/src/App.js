import logo from './img/logo.png';
import './App.css';
import DiceBox from './components/DiceBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main">
          <DiceBox />
          <a href="#" class="myButton">Ridenti kauliuką</a>
        </div>

      </header>
    </div>
  );
}

export default App;
