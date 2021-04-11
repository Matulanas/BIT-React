import { CHANGE_MAKER, MAKE_BLACK, MAKE_YELLOW, SAVE_MAKER } from "../constants";

const carReducer = (state, action) => {

    // let history = JSON.parse(localStorage.history);
    // history.unshift(state);
    // localStorage.setItem('history', JSON.stringify(history));


    switch (action.type) {
        case MAKE_BLACK: 
        return state.map(car => {
            if (car.id === action.payload.id) {
                return {...car, color: 'black'};
            } else {
                return car;
            }
        });
        case MAKE_YELLOW: 
        return state.map(car => {
            if (car.id === action.payload.id) {
                return {...car, color: 'yellow'};
            } else {
                return car;
            }
        });
        case CHANGE_MAKER: 
        return state.map(car => {
            if (car.id === action.payload.id) {
                return {...car, newMaker: action.payload.maker};
            } else {
                return car;
            }
        });
        case SAVE_MAKER: 
        return state.map(car => {
            if (car.id === action.payload.id) {
                return {...car, maker: car.newMaker};
            } else {
                return car;
            }
        });
        default: return state;
    };
    // return state;
}

export default carReducer;