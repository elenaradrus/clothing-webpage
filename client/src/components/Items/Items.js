import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { categoriesMock } from "../../categoriesMock";
import './Items.styles.css';

const Items = ({ id }) => {

    const categoriesId = categoriesMock.find(category => category.id === id);
    const collection = categoriesId.collections;
    const [currentImage, setCurrentImage] = useState(null);
    const navigate = useNavigate();
    

    const handleMouseOver = (image) => {
        setCurrentImage(image);
    };

    const goToPurchaseProduct = (itemId) => {
        navigate(`/collections/${id}/product/${itemId}`)
    }

    return (
        <div className='items-container'>
            {collection ? collection.map((element, index) =>
                <div key={index} className='item-list'>
                    <div className='item-image' id='element.id' onClick={(e) => goToPurchaseProduct(element.id)}>
                        <img
                            src={currentImage === element.image ? element.thumbnail : element.image}
                            title={element.name}
                            alt={element.name}
                            onMouseOver={(e) => handleMouseOver(element.image)}
                            onMouseLeave={() => setCurrentImage(null)}
                        />
                    </div>
                    <div className='item-name'>{element.name}</div>
                    <div className='item-price'>{element.price}</div>
                </div>
            ) : ''}
        </div>

    );
}

export default Items;