import Layout from "../../components/Layout/Layout";
import Slideshow from "../../components/Slideshow/Slideshow";
import Categories from "../../components/Categories/Categories";

const Home = () => {
    return (
        <Layout>
            <Slideshow />
            <Categories />
        </Layout>
    );
}

export default Home;