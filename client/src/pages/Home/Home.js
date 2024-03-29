import { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Slideshow from "../../components/Slideshow/Slideshow";
import Categories from "../../components/Categories/Categories";
import { slides } from "../../slides";
import './Home.styles.css'

const Home = () => {
    return (
        <Layout>
            <div>
                <Slideshow slides={slides} />
                <Categories />
            </div>
        </Layout>
    );
}

export default Home;