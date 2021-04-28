// import { createRef, useContext, useRef, useState, useCallback } from 'react';
import { useRef, useState, useCallback } from 'react';
import './App.css';
import BoxCall from './components/BoxCall';
import { MemoPlane, Plane } from './components/Plane';
// import CarBox from './components/CarBox';
// import RefBox from './components/RefBox';
// import ButtonColor from './context/ButtonColor';
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
    // const ref = createRef();

    function derSumator() {
        return (a, b) => a + b;
    }

    const der1 = derSumator();
    const der2 = derSumator();

    // console.log(der1(5, 6));
    // console.log(der2(5, 6));

    console.log(der1 === der2);

    const [stateCount, setStateCount] = useState(0);

    const reRender = () => {
        const count = stateCount + 1;
        setStateCount(count);
        console.log('STATE UPDATE', count);
    }



    // const doClick = useCallback(() => {
    //     console.log('paspaude')
    // }, []);

    // const dc = useRef(doClick);

    // console.log('is the same', doClick === dc.current);

    const offTime = useRef("16:15");

    const inputRef = useRef();

    const change = () => {
        // const value = inputRef.current.value;
        // setOffTime(value);
        offTime.current = inputRef.current.value;
    }


  return (
    <div className="App">
      <header className="App-header">
        {/* <Users /> */}
        {/* <Posts /> */}
        {/* <ZooBox zooList={zooList}/> */}
        {/* <ButtonColor.Provider value = {bttColor}>
            <CarBox />
        </ButtonColor.Provider> */}
        {/* <RefBox ref={ref} /> */}

        {/* <BoxCall onClick={doClick} /> */}
        {/* <BoxCall onClick={doClick} /> */}

        <MemoPlane number="NBB-123" time="15:25" />
        <MemoPlane number="NAS=755" time={offTime.current} />

        <input type="text" ref={inputRef} />

        <button 
            onClick={change}
            style={{backgroundColor: 'yellow', borderRadius: '5px', color: 'black', padding: '5px', outline: 'none', marginTop: '10px'}}
        >Changer</button>

        <button 
            onClick={reRender}
            style={{backgroundColor: 'yellow', borderRadius: '5px', color: 'black', padding: '5px', outline: 'none', marginTop: '10px'}}
        >Re Render</button>

      </header>
    </div>
  );
}

export default App;
