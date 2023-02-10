import Layout from "../../components/Layout/Layout";
import Slideshow from "../../components/Slideshow/Slideshow";
import Categories from "../../components/Categories/Categories";
import { slides } from "../../slides";

const Home = () => {
    return (
        <Layout>
            <Slideshow slides={slides}/>
            <Categories />
        </Layout>
    );
}

export default Home;