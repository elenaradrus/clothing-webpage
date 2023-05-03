import { useParams, useNavigate } from "react-router-dom";
import './Categories.styles.css';
import itemsDataService from "../../services/categories";
import { useEffect, useState } from "react";


const Categories = () => {

    const [categories, setCategories] = useState()

    const { id } = useParams();
    const navigate = useNavigate();


    const goToCollectionsPage = (id) => {
        navigate(`/collections/${id}`);
    }

    useEffect(() => {
        const categories = []
        itemsDataService.getCategories().then((querySnapshot) => {
            querySnapshot.forEach(doc => {
                categories.push({ id: doc.id, data: doc.data() });
            });
            setCategories(categories)
        });
    }, []);

    return (
        <div className='categories-container'>
            {categories ? categories.map((element, index) =>
                <div key={index} className='category-list'>
                    <div
                        className='category-main'
                        id={element.data.id}
                        onClick={(e) => goToCollectionsPage(e.target.id)}>
                        {element.data.category}
                    </div>
                    <div className='category-image'>
                        <img
                            loading="lazy"
                            src={element.data.image}
                            title={element.data.name}
                            alt={element.data.name}
                            className='image'
                            id={element.id}
                            onClick={(e) => goToCollectionsPage(e.target.id)} />
                    </div>
                    <div className='category-name'>{element.data.name}</div>
                    <div className='category-price'>$ {element.data.price}</div>
                </div>
            ) : ''}
        </div>
    );
}

export default Categories;