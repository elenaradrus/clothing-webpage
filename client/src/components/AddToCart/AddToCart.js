//import { useParams } from "react-router-dom";
import { categoriesMock } from "../../categoriesMock";
import './AddToCart.styles.css';

const AddToCart = ({ id, itemId }) => {

    console.log('itemId', itemId)

    const categoriesId = categoriesMock.find(category => category.id === id);
    const collection = categoriesId.collections;
    const getItem = collection.find(e => e.id == itemId)
    
    return (
        <div className="addToCart-container">
            <div className="addToCart-image">
                <img
                    src={getItem.image}
                    title={getItem.name}
                    alt={getItem.name}
                />
            </div>
            <div className='product-info'>
                <div className='product-container'>
                    <h2>{getItem.name}</h2>
                    <h1>{getItem.price}</h1>
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