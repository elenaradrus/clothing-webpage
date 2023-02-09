import { categoriesMock } from "../../categoriesMock";
import './Categories.styles.css';

const Categories = () => {
    return ( 
        <div className='categories-container'>
            {categoriesMock ? categoriesMock.map((element, index) =>
                    <div key={index} className='category-list'>
                        <div className='category-main'>{element.category}</div>
                        <div className='category-image'>{element.image}</div>
                        <div className='category-name'>{element.name}</div>
                        <div className='category-price'>{element.price}</div>
                    </div>
                ) : ''}
        </div>
    );
}
 
export default Categories;