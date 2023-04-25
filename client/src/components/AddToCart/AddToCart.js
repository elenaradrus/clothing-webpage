//import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddToCart.styles.css';

import { addToCart } from "../../store/Cart/actions";

import itemsDataService from '../../services/categories';

const AddToCart = ({ id, itemId }) => {

    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const [size, setSize] = useState('');
    const [item, setItem] = useState();
    const [message, setMessage] = useState('');

    useEffect(() => {
        setLoading(true);
        itemsDataService.getItem(id, itemId).then((querySnapshot) => {
            const itemData = querySnapshot.data();
            const itemWithId = { id: querySnapshot.id, ...itemData };
            setItem(itemWithId);
            setLoading(false);
        });
    }, []);

    const handleAddToCart = () => {
        if (size === "") {
            setMessage('You must choose a size')
        } else {
            dispatch(addToCart({
                id: item.id,
                name: item.name,
                price: item.price,
                image: item.image,
                size: size,
            }));

            setMessage("")
        }

    };

    if (loading) {
        return <p>Loading...</p>;
    }

    const clothingCategory = () => {
        return (
            <select
                className='addToCart-select'
                value={size}
                onChange={(e) => setSize(e.target.value)}>
                <option>select size</option>
                <option>xs - 36</option>
                <option>s - 38</option>
                <option>m - 40</option>
                <option>l - 42</option>
                <option>xl - 44</option>
                <option>xxl - 46</option>
            </select>
        );
    };

    const footwearCategory = () => {
        return (
            <select
                className='addToCart-select'
                value={size}
                onChange={(e) => setSize(e.target.value)}
            >
                <option>select size</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
            </select>
        );
    };

    const category = item.category
    let select;

    if (category === "knits" || category === "outwear" || category === "shirts" || category === "bottoms") {
        select = clothingCategory();
    } else if (category === "footwear") {
        select = footwearCategory();
    }


    return (

        <div className="addToCart-container">

            <div className='addToCart-product'>
                <div className="addToCart-image">
                    <img

                        loading='lazy'
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
                        {select}
                        <button
                            className='addToCart-button'
                            onClick={() => handleAddToCart(item)}
                        >
                            add to cart
                        </button>
                        {message}
                    </div>

                </div>
            </div>

            <div className='landscapeImage-container'>
                <div className='itemInfo'>
                    <p>{item.info}</p>
                </div>

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