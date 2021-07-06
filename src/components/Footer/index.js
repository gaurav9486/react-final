import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <>
        <div className="the-footer">
                <div className="footer-column">
                    <h3 className="footer-heading">ONLINE STORE</h3>
                    <a className="footer-data" href="#">MEN CLOTHING</a>
                    <a className="footer-data" href="#">WOMEN CLOTHING</a>
                    <a className="footer-data" href="#">MEN ACCESSORIES</a>
                    <a className="footer-data" href="#">WOMEN ACCESSORIES</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">HELPFUL LINKS</h3>
                    <a className="footer-data" href="#">HOME</a>
                    <a className="footer-data" href="#">ABOUT</a>
                    <a className="footer-data" href="#">CONTACT</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">PARTNERS</h3>
                    <a className="footer-data" href="#">ZARA</a>
                    <a className="footer-data" href="#">PANTALOONS</a>
                    <a className="footer-data" href="#">LEVIS</a>
                    <a className="footer-data" href="#">UCB</a>
                    <a className="footer-data" href="#">+ MANY MORE</a>
                </div>
                <div className="footer-column">
                    <h3 className="footer-heading">ADDRESS</h3>
                    <p className="address-data" href="#">BUILDING 101</p>
                    <p className="address-data" href="#">CENTRAL AVENUE</p>
                    <p className="address-data" href="#">LA - 902722</p>
                    <p className="address-data" href="#">UNITED STATES</p>
                </div>
        </div>
        </>
    )
}

export default Footer;