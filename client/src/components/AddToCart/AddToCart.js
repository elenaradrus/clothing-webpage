//import { useParams } from "react-router-dom";
import './AddToCart.styles.css';

const AddToCart = () => {
    return (
        <div className="addToCart-container">
            <div className="addToCart-image">
                Imagen
            </div>
            <div className='product-info'>
                <div className='product-container'>
                    <h2>The California</h2>
                    <h1>$128</h1>
                </div>

                <div className='btn-container'>
                    <select className='addToCart-select'>
                        <option>select size</option>
                        <option>xs - 36</option>
                        <option>s - 38</option>
                        <option>m - 40</option>
                        <option>l - 42</option>
                        <option>xl - 44</option>
                        <option>xxl - 46</option>
                    </select>
                    <button className='addToCart-button'>add to cart</button>
                </div>

            </div>
        </div>
    );
}

export default AddToCart;