import logo from './img/logo.png';
import './App.css';
import DiceBox from './components/DiceBox';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main">
          <DiceBox />
          <DiceBox />
          <Button />
        </div>

      </header>
    </div>
  );
}

export default App;
