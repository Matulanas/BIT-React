import { MAKE_BLACK, MAKE_YELLOW } from "../constants";

const carReducer = (state, action) => {

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
        default: return state;
    };
    // return state;
}

export default carReducer;