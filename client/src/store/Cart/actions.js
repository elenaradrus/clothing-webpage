import {
    ADD_TO_CART,
    REMOVE_FROM_CART
} from './types';

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
});

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    };
};

