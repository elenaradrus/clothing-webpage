import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/Cart/actions';

const Cart = ({ }) => {

    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();
    
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

   
    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {Object.values(cartItems).map(item => (
                    <li key={item.id}>
                        <div><img src={item.image} alt={item.name} /></div>
                        <div>{item.name}</div>
                        <div>$ {item.price}</div>
                        <div>{item.size}</div>
                        <div>{item.quantity}</div>
                        <div>$ {item.totalPrice}</div>
                        {/* <div>id: {item.id}</div> */}
                        <button onClick={() => handleRemoveFromCart(item.id)}>X</button>
                    </li>
                ))}
            </ul>
            <p>Total price: $ {totalPrice}</p>
        </div>
    );
}



export default Cart;

