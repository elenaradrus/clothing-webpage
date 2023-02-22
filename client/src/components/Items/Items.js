import { categoriesMock } from "../../categoriesMock";
import './Items.styles.css';

const Items = ({ id }) => {

    const categoriesId = categoriesMock.find(category => category.id === id);
    const collection = categoriesId.collections;

    return (
        <div className='items-container'>
            {collection ? collection.map((element, index) =>
                <div key={index} className='item-list'>
                    <div className='item-name'>{element.name}</div>
                    <div className='item-image'>
                    </div>
                    <div className='item-price'>{element.price}</div>
                </div>
            ) : ''}
        </div>

    );
}

export default Items;