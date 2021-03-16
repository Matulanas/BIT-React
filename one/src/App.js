import './App.css';
import ClasicBox from './components/ClasicBox';
import BoxUniversal from './components/BoxUniversal';
import {normalStyle, fancyStyle} from './shared/styles';
import {getRandomInt} from './functions';
import TwoButtonBox from './components/TwoButtonBox';


function App() { // <-- Pagrindinis Komponentas
  return (
    <div className="App">
      <header className="App-header">
        <BoxUniversal color={'white'} number={3} boxStyle={normalStyle}/>
        <BoxUniversal color={'yellow'} number={getRandomInt(100)} boxStyle={fancyStyle}/>
        <ClasicBox button1Title={'Make red!'} button2Title={'Make yellow!'}/>
        <TwoButtonBox />
      </header>
    </div>
  );
}

export default App;