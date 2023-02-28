import { useNavigate } from 'react-router-dom';
import './UpperMenu.styles.css';

const UpperMenu = () => {
    const navigate = useNavigate();
    const goToHomePage = () => {
        navigate('/')
    }
    return (
        <div className="upperMenu-container">
            <div className="links">
                <h3 className='jeremyTunner' onClick={() => goToHomePage()}>Jeremy Tunner</h3>
                <p className='upperMenuText'>Shop</p>
                <p className='upperMenuText'>About</p>
                <p className='upperMenuText'>Help</p>
            </div>

            <div className="icons">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-basket" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="7 10 12 4 17 10" />
                    <path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z" />
                    <circle cx="12" cy="15" r="2" />
                </svg>
            </div>
        </div>);
}

export default UpperMenu;