

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

import { useReducer } from 'react';
import carReducer from '../reducers/carReducer';
import initCars from '../shared/cars';
import { MAKE_BLACK, MAKE_YELLOW } from '../constants';

const CarBox = props => {

    const [cars, dispatch] = useReducer(carReducer, initCars);

    console.log(cars);


    return(
        <>
        <ul>
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
                    </li>

                ))
            }
        </ul>
        </>
    );
}

export default CarBox;