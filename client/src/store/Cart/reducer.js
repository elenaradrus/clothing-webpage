import {
    ADD_TO_CART,
    ADD_TO_CART_ERROR
} from './types';

const initialState = {
    items: {},
    totalPrice: 0,
    totalItems: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, name, price, image, size } = action.payload;
            const item = state.items[id];
            const newItem = {
                name: name,
                price: price,
                image: image,
                size: size,
                quantity: 1,
                totalPrice: price * 1,
            };
            const newTotalPrice = state.totalPrice + (price * 1);
            return {
                ...state,
                items: {
                    ...state.items,
                    [id]: item ? {
                        ...item,
                        quantity: item.quantity + 1,
                        totalPrice: item.totalPrice + price
                    } : newItem,
                },
                totalPrice: newTotalPrice,
                totalItems: state.totalItems + 1,
            };
        default:
            return state;
    }
};


export default cartReducer;
