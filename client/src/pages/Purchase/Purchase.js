import { useParams } from "react-router-dom";
import AddToCart from "../../components/AddToCart/AddToCart";
import Layout from "../../components/Layout/Layout";

const Purchase = () => {

    const { itemId } = useParams();

    return (
        <Layout>
            <AddToCart itemId={itemId}/>
        </Layout>
    );
}

export default Purchase;