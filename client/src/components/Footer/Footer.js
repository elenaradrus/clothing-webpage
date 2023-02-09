import './Footer.styles.css';

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <div className='footerInfo'>
                    <h3 className='footerTitle'>Jeremy Tunner</h3>
                    <p className='footerText'>Receive 20% off your first purchase</p>
                </div>

                <div className='footerInfo'>
                    <h4 className='footerTitle'>Call or text</h4>
                    <p className='footerText'>We'd love to engage in some good old fashioned conversation. Available M-F 9am-5pm Pacific.</p>
                    <p>(415) 304-8208</p>
                </div>

                <div className='footerInfo'>
                    <h4 className='footerTitle'>Email</h4>
                    <p className='footerText'>Drop us a line anytime and we'll get back to you within 24 hours.</p>
                    <p className='footerText'>Contact us</p>
                </div>
            </div>

            <div className='footerCopywrite'>&copy; 2009-2023 Jeremy Tunner</div>
        </div>
    );
}

export default Footer;