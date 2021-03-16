import logo from './img/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <DiceBox /> */}
        <div className="main">
          <button className="btn">Ridenti kauliuką</button>
          <a href="#" class="myButton">facebook</a>
        </div>

      </header>
    </div>
  );
}

export default App;
