import { categoriesMock } from "../../categoriesMock";

const Items = ({id}) => {

    console.log('id en items', id)

    const categoriesId = categoriesMock.map( e => e.id)

    for (let i = 0; i < categoriesId.length; i++) {
        const element = categoriesId[i];  
        if(id === element) {
            console.log('los id coinciden')
        }
    }

    const renderItem = () =>{
        const items = [];
        for (const category of categoriesMock) {
            for (const item of category.collections) {
              items.push(<span>{item.name}</span>);
            }
          }

        return items;
    }

    return (
        <div>
            {renderItem()}
        </div>

    );
}

export default Items;