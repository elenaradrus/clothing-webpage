import { categoriesMock } from "../../categoriesMock";

const Items = ({ id }) => {

    const categoriesId = categoriesMock.find(category => category.id === id);
    const collection = categoriesId.collections;

    return (
        <div>
            {collection ? collection.map((element, index) =>
                <div key={index}>
                    <div>{element.name}</div>
                    <div>{element.price}</div>
                </div>
            ) : ''}
        </div>

    );
}

export default Items;