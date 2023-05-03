import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import itemsDataService from '../../services/categories';
import './Items.styles.css';

const Items = ({ id }) => {

    const [items, setItems] = useState();
    const [currentImage, setCurrentImage] = useState(null);
    const navigate = useNavigate();

    const handleMouseOver = (image) => {
        setCurrentImage(image);
    };

    const goToPurchaseProduct = (itemId) => {
        navigate(`/collections/${id}/product/${itemId}`)
    }

    useEffect(() => {
        itemsDataService.getCategories().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.id === id) {
                    const items = []
                    itemsDataService.getItems(doc.id).then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            items.push({ id: doc.id, data: doc.data() })
                        });
                        setItems(items)
                    });
                };
            });
        });

    }, [id])

    return (
        <div className='items-container'>
            {items ? items.map((items, index) =>
                <div key={index} className='item-list'>
                    <div className='item-image' id='item.id' onClick={(e) => goToPurchaseProduct(items.id)}>
                        <img
                            loading='lazy'
                            src={currentImage === items.data.image ? items.data.thumbnail : items.data.image}
                            title={items.data.name}
                            alt={items.data.name}
                            onMouseOver={(e) => handleMouseOver(items.data.image)}
                            onMouseLeave={() => setCurrentImage(null)}
                        />
                    </div>
                    <div className='item-name'>{items.data.name}</div>
                    <div className='item-price'>$ {items.data.price}</div>
                </div>
            ) : ''}
        </div>

    );
}

export default Items;