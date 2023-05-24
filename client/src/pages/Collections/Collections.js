import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Items from "../../components/Items/Items";

const Collections = () => {

    const { id, itemId } = useParams();

    return (
        <Layout>
            <Items id={id} itemId={itemId}/>
        </Layout>

    );
}

export default Collections;