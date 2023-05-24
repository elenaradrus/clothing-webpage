import './Checkout.styles.css';


const Checkout = () => {
    return (
        <div className='checkoutText'>

            <p>This clothing webpage is a personal project.</p>
            <p>
                If you want to shop the items you saw before you can do that at <a
                    href="https://www.taylorstitch.com/" className='checkoutLink'>Taylor Stitch.</a>
            </p>
            <p>
                If you want to see the code used to create this project, please visit <a
                    href="https://github.com/elenaradrus/clothing-webpage" className='checkoutLink'>
                    my repository.
                </a>
            </p>

        </div>

    );
}

export default Checkout;