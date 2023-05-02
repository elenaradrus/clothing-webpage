import { useState } from "react";
import UpperMenu from "../UpperMenu/UpperMenu";
import Footer from "../Footer/Footer";
import Cart from "../Cart/Cart";
import Register from "../Register/Register";
import './Layout.styles.css';

const Layout = ({ children }) => {

    const [showCart, setShowCart] = useState(false);
    const [showUser, setShowUser] = useState(false)

    const handleShowCart = () => {
        setShowCart(true);
        setShowUser(false);
    };

    const handleHideCart = () => {
        setShowCart(false);
    };

    const handleShowUser = () => {
        setShowUser(true);
        setShowCart(false);
    };

    const handleHideUser = () => {
        setShowUser(false);
    };

    return (
        <div className="layout-container">
            <UpperMenu
                handleShowCart={handleShowCart}
                handleShowUser={handleShowUser}
            />
            <div className="children-container">
                {children}
                <div className="showCart">
                    {showCart && <Cart handleHideCart={handleHideCart} />}
                    {showUser && <Register handleHideUser={handleHideUser}/>}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;