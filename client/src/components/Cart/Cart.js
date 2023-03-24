import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);
    console.log(cartItems)

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {Object.entries(cartItems).map(([itemId, item]) => (
                    <li key={itemId}>
                        <div><img src={item.image} alt={item.name} /></div>
                        <div>{item.name}</div>
                        <div>$ {item.price}</div>
                        <div>{item.size}</div>
                        <div>{item.quantity}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;

