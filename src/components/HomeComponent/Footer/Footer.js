import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import masterCard from '../../../assets/Rectangle 683/Rectangle 683.png';
import secureCard from '../../../assets/Rectangle 682/Rectangle 682.png';
import visaCard from '../../../assets/Rectangle 684/Rectangle 684.png';

import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer-container">
            <div className="Footer-box">
                <div className="Footer-query-section">
                    <div className="Footer-query-section__logo">
                        <img src="" alt="no_image" />
                    </div>
                    <p className="Footer-query-section__content">
                        In case you have any questions or reviews, wtite to us vie the e-mail or make a call! We are available 7 days a week.
                    </p>
                    <p className="Footer-query-section__writeToUs">
                        Write to us at
                    </p>
                    <Router>
                        <Link className="Footer-query-section__mail" to="/">Abcdefgh@gmail.com</Link>
                    </Router>
                    <p className="Footer-query-section__callUs">Got queries? Call Us!</p>
                    <p className="Footer-query-section__phoneNumber">+1800 753 23 56</p>
                </div>
                <div className="Footer-query-content">
                    <div className="Footer-query-content__subscribe">
                        <label className="Footer-query-content__label">
                            SIGNUP FOR LATEST NEWSLETTER AND INFO
                        </label>
                        <div className="Footer-query-content__input-button">
                            <input className="Footer-query-content__input" type="text" />
                            <button className="Footer-query-content__button">Sign up</button>
                        </div>
                    </div>
                    <div className="Footer-query-content__links">
                        <div className="Footer-query-content__links-list">
                            <h5 className="Footer-query-content__links-header">USEFUL LINKS</h5>
                            <li className="Footer-query-content__link">My Account</li>
                            <li className="Footer-query-content__link">FAQs</li>
                            <li className="Footer-query-content__link">Privacy Policy</li>
                            <li className="Footer-query-content__link">About Us</li>
                            <li className="Footer-query-content__link">Terms &amp; Conditions</li>
                        </div>
                        <div className="Footer-query-content__download">
                            <h5 className="Footer-query-content__download-header">DOWNLOAD OUR APP</h5>
                            <img className="Footer-query-content__download-store" src="" alt="no_image" />
                            <img className="Footer-query-content__download-store" src="" alt="no_image" />
                        </div>
                        <div className="Footer-query-content__paySecurely">
                            <h5 className="Footer-query-content__paySecurely-header">PAY SECURELY WITH</h5>
                            <img className="Footer-query-content__paySecurely-gateway" src="" alt="no_image" />
                            <img className="Footer-query-content__paySecurely-gateway" src={masterCard} alt="no_image" />
                            <img className="Footer-query-content__paySecurely-gateway" src={secureCard} alt="no_image" />
                            <img className="Footer-query-content__paySecurely-gateway" src={visaCard} alt="no_image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-social">
                <div className="Footer-social__icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-youtube"></i>
                </div>
                <div className="Footer-social__links">
                    <ul className="Footer-social__links-list">
                        <li className="Footer-social__link">Home</li>
                        <li className="Footer-social__link">Shop</li>
                        <li className="Footer-social__link">About us</li>
                        <li className="Footer-social__link">Blog</li>
                        <li className="Footer-social__link">Delivery details</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
