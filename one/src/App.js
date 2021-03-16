import './App.css';
import ClasicBox from './components/ClasicBox';
import BoxUniversal from './components/BoxUniversal';
import {normalStyle, fancyStyle} from './shared/styles';
import {getRandomInt} from './functions';


function App() { // <-- Pagrindinis Komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUniversal color={'white'} number={3} boxStyle={normalStyle}/>
        <BoxUniversal color={'yellow'} number={getRandomInt(100)} boxStyle={fancyStyle}/>
        <ClasicBox color={'yellow'} />
      </header>
    </div>
  );
}

export default App;