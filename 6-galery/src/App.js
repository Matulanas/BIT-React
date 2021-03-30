import Photos from './components/Photos';
import logo from './images/logo.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <img src={logo} alt="logo"/>
        <h2 className="app-title">Gallery</h2>
      </div>
      <div className="gallery">
        <Photos />
      </div>
    </div>
  );
}

export default App;
