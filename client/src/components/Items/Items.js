import { useState } from 'react';
import { categoriesMock } from "../../categoriesMock";
import './Items.styles.css';

const Items = ({ id }) => {

    const categoriesId = categoriesMock.find(category => category.id === id);
    const collection = categoriesId.collections;
    const [currentImage, setCurrentImage] = useState(null);

    const handleMouseOver = (image) => {
        setCurrentImage(image);
    };

    return (
        <div className='items-container'>
            {collection ? collection.map((element, index) =>
                <div key={index} className='item-list'>
                    <div className='item-image'>
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