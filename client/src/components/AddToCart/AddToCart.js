//import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesMock } from "../../categoriesMock";
import './AddToCart.styles.css';

import { addToCart } from "../../store/Cart/actions";
import Cart from '../Cart/Cart';

import itemsDataService from '../../services/categories';

const AddToCart = ({ id, itemId }) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const [size, setSize] = useState('');
    const [item, setItem] = useState();

    console.log('id del item', itemId)


    useEffect(() => {
        setLoading(true);
        itemsDataService.getItem(id, itemId).then((querySnapshot) => {
            const itemData = querySnapshot.data();
            const itemWithId = { id: querySnapshot.id, ...itemData };
            setItem(itemWithId);
            setLoading(false);
        });
    }, []);

    console.log(item)


    const handleAddToCart = () => {
        dispatch(addToCart({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            size: size,
        }));
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
            
        <div className="addToCart-container">

            <div className='addToCart-product'>
                <div className="addToCart-image">
                    <img
                        src={item.secondImage}
                        title={item.name}
                        alt={item.name}
                    />
                </div>

                <div className='product-container'>
                    <div className='product-info'>
                        <h2>{item.name}</h2>
                        <h1>$ {item.price}</h1>
                    </div>

                    <div className='btn-container'>
                        <select
                            className='addToCart-select'
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        >
                            <option>select size</option>
                            <option>xs - 36</option>
                            <option>s - 38</option>
                            <option>m - 40</option>
                            <option>l - 42</option>
                            <option>xl - 44</option>
                            <option>xxl - 46</option>
                        </select>
                        <button
                            className='addToCart-button'
                            onClick={() => handleAddToCart(item)}
                            disabled={!size}
                        >
                            add to cart
                        </button>
                    </div>

                </div>
            </div>

            <div className='landscapeImage-container'>
                <p className='itemInfo'>{item.info}</p>

                <img
                    className='landscapeImage'
                    src={item.landscapeImage}
                    title={item.name}
                    alt={item.name}
                />
            </div>

        </div>
    );
}

export default AddToCart;