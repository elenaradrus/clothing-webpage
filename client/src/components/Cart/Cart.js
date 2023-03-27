import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems = useSelector(state => state.cart.items);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    console.log(cartItems)

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
                    </li>
                ))}
            </ul>
            <p>Total price: $ {totalPrice}</p>
        </div>
    );
}



export default Cart;

