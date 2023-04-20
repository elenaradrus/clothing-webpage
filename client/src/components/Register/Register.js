import './Register.styles.css'

const Register = ({ handleHideUser }) => {
    return (
        <div className='cart-container'>
            <div className='cartTitle-Container'>
                <button
                    onClick={handleHideUser}
                    className='hideCartButton'
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <h2>Register an account</h2>
            </div>
        </div>

    );
}

export default Register;