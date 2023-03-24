import { useParams, useNavigate } from "react-router-dom";
import { categoriesMock } from "../../categoriesMock";
import './Categories.styles.css';

const Categories = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    
    const goToCollectionsPage = (id) => {
        navigate(`/collections/${id}`);
    }

    return (
        <div className='categories-container'>
            {categoriesMock ? categoriesMock.map((element, index) =>
                <div key={index} className='category-list'>
                    <div className='category-main' id={element.id} onClick={(e) => goToCollectionsPage(e.target.id)}>{element.category}</div>
                    <div className='category-image'>
                        <img src={element.image} title={element.name} alt={element.name} className='image' id={element.id} onClick={(e) => goToCollectionsPage(e.target.id)}/> 
                    </div>
                    <div className='category-name'>{element.name}</div>
                    <div className='category-price'>$ {element.price}</div>
                </div>
            ) : ''}
        </div>
    );
}

export default Categories;