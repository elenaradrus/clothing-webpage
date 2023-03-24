import {
    ADD_TO_CART,
    ADD_TO_CART_ERROR
} from './types';

const initialState = {
    items: [],
    error: null,
};

function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                error: null,
            };
        case ADD_TO_CART_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default cartReducer;
