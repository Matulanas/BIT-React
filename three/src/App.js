import './App.css';
import Posts from './components/Posts';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Users />
        <Posts />
      </header>
    </div>
  );
}

export default App;
