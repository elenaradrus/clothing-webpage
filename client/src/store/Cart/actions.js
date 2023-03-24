import { 
    ADD_TO_CART, 
    ADD_TO_CART_ERROR 
} from './types';

export const addToCart = (item) => {
  return (dispatch) => {
    try {
      dispatch({
        type: ADD_TO_CART,
        payload: item,
      });
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_ERROR,
        payload: error.message,
      });
    }
  };
};
