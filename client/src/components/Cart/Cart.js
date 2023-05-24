import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../store/Cart/actions';

import './Cart.styles.css';

const Cart = ({ handleHideCart }) => {

    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='cart-container'>

            <div className='cartTitle-Container'>
                <button
                    onClick={handleHideCart}
                    className='hideCartButton'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <h2>Your Shopping Cart</h2>
            </div>

            <div className='cartInfo-Container'>
                <ul>
                    {Object.values(cartItems).map(item => (
                        <li key={item.id} className='cartList'>
                            <div className='cartImage-Container'>
                                <img src={item.image} alt={item.name} className='cartImage' />
                            </div>
                            <div className='cartItemInfo'>
                                <div>{item.name}</div>
                                <div className='cartItemSize'>{item.size}</div>
                                <div>{item.quantity}</div>
                                <div>$ {item.totalPrice}</div>
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className='deleteButton'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <line x1="4" y1="7" x2="20" y2="7" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                    </svg>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='cartCheckout'>
                {totalPrice > 0 && (
                    <button
                        className='checkout'
                        onClick={() => goToCheckout()}
                    >
                        Checkout
                    </button>
                )}
                <p className='cartTotalPrice'>Total: $ {totalPrice}</p>
            </div>

        </div>
    );
}



export default Cart;

