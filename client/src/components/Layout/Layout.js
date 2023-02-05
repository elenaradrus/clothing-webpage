import UpperMenu from "../UpperMenu/UpperMenu";
import Footer from "../Footer/Footer";

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