import { useParams } from "react-router-dom";
import AddToCart from "../../components/AddToCart/AddToCart";
import Layout from "../../components/Layout/Layout";

const Purchase = () => {

    const { id, itemId } = useParams();

    return (
        <Layout>
            <AddToCart id={id} itemId={itemId}/>
        </Layout>
    );
}

export default Purchase;