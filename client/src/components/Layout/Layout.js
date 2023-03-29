import { useState } from "react";
import UpperMenu from "../UpperMenu/UpperMenu";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import './Layout.styles.css';

const Layout = ({ children }) => {

    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
        setShowCart(true);
    };

    const handleHideCart = () => {
        setShowCart(false);
    }

    return (
        <div>
            <UpperMenu
                handleShowCart={handleShowCart}
            />
            <div className="children-container">
                {children}
                {showCart && <Cart handleHideCart={handleHideCart}/>}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;