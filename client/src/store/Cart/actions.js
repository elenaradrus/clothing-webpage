import { 
    ADD_TO_CART, 
    ADD_TO_CART_ERROR 
} from './types';

export const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload
})

