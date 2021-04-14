import { createRef, useContext } from 'react';
import './App.css';
import CarBox from './components/CarBox';
import RefBox from './components/RefBox';
import ButtonColor from './context/ButtonColor';
// import Posts from './components/Posts';
// import Users from './components/Users';

// import { compose } from 'recompose';


// import ZooBox from './components/ZooBox';

// import ZooBox from './hocs/withZooBoxCompose';

// import ZooBox from './hocs/withZooBoxCompose';


// import withZooBoxEmpty from './hocs/withZooBoxEmpty';
// import withZooBoxError from './hocs/withZooBoxError';
// import withZooBoxList from './hocs/withZooBoxList';

// import withZooBoxCompose from './hocs/withZooBoxCompose';

// Testai
// const zooList = [{id:45, name:'zebro'},{id:78, name:'tiger'}];
// const zooList = [];
// const zooList = null;

// const cityList = [{id:145, name:'John'},{id:178, name:'Bob'}];
// const cityList = [];
// const cityList = null;

// const ZooBox2 = withZooBoxError(ZooBox);
// const ZooBox3 = withZooBoxEmpty(ZooBox2);
// ARBA ->
// const ZooBoxFinal = withZooBoxError(withZooBoxEmpty(ZooBox));
// ARBA ->
// const withZooBoxList = compose(
//   withZooBoxError,
//   withZooBoxEmpty
// );
// const ZooBox = withZooBoxCompose(ZooBox);

function App() {

    // const bttColor = useContext(ButtonColor);
    const ref = createRef();

  return (
    <div className="App">
      <header className="App-header">
        {/* <Users /> */}
        {/* <Posts /> */}
        {/* <ZooBox zooList={zooList}/> */}
        {/* <ButtonColor.Provider value = {bttColor}>
            <CarBox />
        </ButtonColor.Provider> */}
        <RefBox ref={ref} />
      </header>
    </div>
  );
}

export default App;
