import {
    ADD_TO_CART,
    REMOVE_FROM_CART
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
                id: id,
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
        case REMOVE_FROM_CART:
            const itemId = action.payload;
            const itemToRemove = state.items[itemId];
            const newItems = { ...state.items };
            let newTotalPriceRemove = state.totalPrice;
            if (itemToRemove) {
                newTotalPriceRemove -= itemToRemove.totalPrice;
                delete newItems[itemId];
            }
            return {
                ...state,
                items: newItems,
                totalPrice: newTotalPriceRemove,
                totalItems: state.totalItems - (itemToRemove ? itemToRemove.quantity : 0),
            };

        default:
            return state;
    }
};


export default cartReducer;
