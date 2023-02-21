import UpperMenu from "../UpperMenu/UpperMenu";
import Footer from "../Footer/Footer";
import './Layout.styles.css';

const Layout = ({ children }) => {
    return (
        <div>
            <UpperMenu/>
            <div className="children-container">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;