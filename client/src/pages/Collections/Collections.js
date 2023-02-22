import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Items from "../../components/Items/Items";

const Collections = () => {

    const { id } = useParams();

    return (
        <Layout>
            <Items id={id}/>
        </Layout>

    );
}

export default Collections;