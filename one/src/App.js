import './App.css';
import ClasicBox from './components/ClasicBox';
import BoxUniversal from './components/BoxUniversal';
import {normalStyle, fancyStyle} from './shared/styles';
import {getRandomInt} from './functions';
import TwoButtonBox from './components/TwoButtonBox';
import UlBox from './components/UlBox';
import ColorHolder from './components/ColorHolder';


function App() { // <-- Pagrindinis Komponentas
  return (
    <div className="App">
      <header className="App-header">
        <UlBox color={'white'} boxStyle={normalStyle}/>
        <BoxUniversal color={'yellow'} number={getRandomInt(100)} boxStyle={fancyStyle}/>
        <ClasicBox button1Title={'Make red!'} button2Title={'Make yellow!'}/>
        <TwoButtonBox />
      </header>
    </div>
  );
}

export default App;