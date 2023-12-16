import React from 'react'
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <h1 className="logo">
                    thank you for your visit
                </h1>
            </div>
            <ul className="footer-links">
                    <div class="social-media">
                        <a><i class="fab fa-facebook"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                    </div>
            </ul>
            <div className="last">
                <h5>made by @Sunacchi</h5>
            </div>
        </div>
    )
}
export default Footer;