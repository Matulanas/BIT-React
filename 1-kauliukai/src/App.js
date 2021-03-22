import logo from './img/logo.png';
import './App.css';
import Parent from './components/Parent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="main">
          <Parent />
        </div>

      </header>
    </div>
  );
}

export default App;
