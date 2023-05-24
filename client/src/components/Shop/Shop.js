import { useParams, useNavigate } from "react-router-dom";
import itemsDataService from "../../services/categories";
import { useEffect, useState } from "react";

import './Shop.styles.css';

const Shop = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState()
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
        <div className='shop-container'>
            {categories ? categories.map((element, index) =>
                <div key={index}>
                    <div
                        className='upperMenuText'
                        id={element.id}
                        onClick={(e) => goToCollectionsPage(e.target.id)}
                    >
                        {element.data.category}
                    </div>
                </div>
            ) : ''}
        </div>
    );
}

export default Shop;