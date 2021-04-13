

// const counterReducer = (count, actionPlus1) => {
//     return count + 1; // Nieko nemodifikuoja, bet grazina modifikuota kopija
// }

// const counterReducer = (count, action) => {
//     if(action.type === 'INC') {
//         return count + 1;
//     }
//     if(action.type === 'DEC') {
//         return count - 1;
//     }
//     return count; // <-- turi kazka grazinti, kas patampa nauju state
// }

// import { INCREASE, DECREASE} from '../constants';
// const action = {type: 'INCREASE', payload: 5};
// const state = {count: 0};
// const counterReducer = (state, action) => {
//     switch (action.type) {
//         case 'INCREASE': return {...state, count: state.count + 1};
//         case 'DECREASE': return {...state, count: state.count - 1};
//         default: state;
//     }
// }

// const counterReducer = (state, action) => {
//     switch (action.type) {
//         case INCREASE: return {...state, count: state.count + action.payload};
//         case DECREASE: return {...state, count: state.count - action.payload};
//         default: return state;
//     }
// }

import { useContext, useEffect, useReducer } from 'react';
import carReducer from '../reducers/carReducer';
import initCars from '../shared/cars';
import { MAKE_BLACK, MAKE_YELLOW, CHANGE_MAKER, SAVE_MAKER } from '../constants';
import ButtonColor from '../context/ButtonColor';

const CarBox = () => {


    const bttColor = useContext(ButtonColor);


    const [cars, dispatch] = useReducer(carReducer, initCars);

    console.log(cars);

    useEffect(() => {

        localStorage.setItem('history', JSON.stringify([]));
        // localStorage.setItem('person', 'Matas');
        // localStorage.person = 'Matas';

        // localStorage.removeItem('animal');

        // for (let key in localStorage) { // negerai taip gaunasi
        //     console.log(key);
        // }

        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                console.log(key);
            }
        }
    })

    return(
        <>
        <ul>
        <div>
            {localStorage.person} <br></br>
            {/* {JSON.parse(localStorage.animal).name} */}
        </div>
            {
                cars.map(car => (
                    <li style={{border: '1px solid yellow', backgroundColor: car.color, display: 'flex', flexDirection: 'column'}} key={car.id}>
                        {car.maker} - {car.color}
                        <div style={{display: 'block'}}>
                            <button 
                                onClick={() => dispatch({type: MAKE_BLACK, payload: {id: car.id} })}
                                style={{backgroundColor: 'black', color: 'white', padding: '5px', outline: 'none'}}
                            >Make Black</button>
                            <button 
                                onClick={() => dispatch({type: MAKE_YELLOW, payload: {id: car.id}})}
                                style={{backgroundColor: 'yellow', color: 'black', padding: '5px', outline: 'none'}}
                            >Make Yellow</button>
                        </div>
                        <div style={{display: 'block'}}>
                            <input 
                                type="text"
                                onChange={(e) => dispatch({type: CHANGE_MAKER, payload: {id: car.id, maker: e.target.value}})}
                                value={car.newMaker}
                            />
                            {/* <ButtonColor.Consumer>
                                { value=> (
                                    <button
                                        onClick={() => dispatch({type: SAVE_MAKER, payload: {id: car.id}})} 
                                        style={{padding: '5px', outline: 'none', backgroundColor: value}}
                                    >Set New Maker</button>
                                )}
                            </ButtonColor.Consumer> */}
                             <button
                                onClick={() => dispatch({type: SAVE_MAKER, payload: {id: car.id}})} 
                                style={{padding: '5px', outline: 'none', backgroundColor: bttColor}}
                            >Set New Maker</button>
                        </div>
                    </li>

                ))
            }
        </ul>
        </>
    );
}

export default CarBox;