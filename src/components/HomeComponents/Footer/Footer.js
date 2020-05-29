import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import freshmeatLogoS from '../../../assets/HomeComponentAssets/freshmeatLogo/freshmeatLogoS.png';
import masterCardS from '../../../assets/HomeComponentAssets/masterCard/masterCardS.png';
import secureCardS from '../../../assets/HomeComponentAssets/secureCard/secureCardS.png';
import verifiedByVisaS from '../../../assets/HomeComponentAssets/verifiedByVisa/verifiedByVisaS.png';

import './Footer.css';

export default function Footer() {
    const queryContentLinks = [
        { id: 1, path: "/", page: "My Account" },
        { id: 2, path: "/", page: "FAQs" },
        { id: 3, path: "/", page: "Privacy Policy" },
        { id: 4, path: "/", page: "About us" },
        { id: 5, path: "/", page: "Terms & Conditions" }
    ];

    const queryContentDownloadLinks = [
        { id: 1, path: "/", image: "" },
        { id: 2, path: "/", image: "" }
    ];

    const paySecurelyGatewayLinks = [
        { id: 1, path: "/", image: `` },
        { id: 2, path: "/", image: `${masterCardS}` },
        { id: 3, path: "/", image: `${secureCardS}` },
        { id: 4, path: "/", image: `${verifiedByVisaS}` }
    ];

    const footerIcons = [
        { id: 1, path: "/", icon: "fab fa-facebook-f", size: "fa-lg" },
        { id: 2, path: "/", icon: "fab fa-twitter", size: "fa-lg" },
        { id: 3, path: "/", icon: "fab fa-instagram", size: "fa-lg" },
        { id: 4, path: "/", icon: "fab fa-youtube", size: "fa-lg" }
    ]

    const footerLinks = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/", name: "Shop" },
        { id: 3, path: "/", name: "About us" },
        { id: 4, path: "/", name: "Blog" },
        { id: 5, path: "/", name: "Delivery details" }
    ]

    return (
        <div className="Footer-container">
            <div className="Footer-box">
                <div className="Footer-query-section">
                    <div className="Footer-query-section__logo">
                        <img src={freshmeatLogoS} alt="no_image" height="100" width="100" />
                    </div>
                    <p className="Footer-query-section__content">
                        In case you have any questions or reviews, wtite to us vie the e-mail or make a call! We are available 7 days a week.
                    </p>
                    <p className="Footer-query-section__writeToUs">
                        Write to us at
                    </p>
                    <p className="Footer-query-section__mail">
                        <Router>
                            <Link to="/"><span>Abcdefgh@gmail.com</span></Link>
                        </Router>
                    </p>
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
                            <p className="Footer-query-content__links-header">USEFUL LINKS</p>
                            <Router>
                                {queryContentLinks.map((item,index) => {
                                    return (
                                        <li key={index}>
                                            <Link className="Footer-query-content__link" to={item.path}>
                                                {item.page}
                                            </Link>
                                        </li>
                                    )
                                })}
                            </Router>
                        </div>
                        <div className="Footer-query-content__download">
                            <p className="Footer-query-content__download-header">DOWNLOAD OUR APP</p>
                            <Router>
                                {queryContentDownloadLinks.map((item, index) => {
                                    return (
                                        <Link key={index} to={item.path}>
                                            <img className="Footer-query-content__download-store" src={item.image} alt="no_image" />
                                        </Link>
                                    )
                                })}
                            </Router>
                        </div>
                        <div className="Footer-query-content__paySecurely">
                            <p className="Footer-query-content__paySecurely-header">PAY SECURELY WITH</p>
                            <div className="Footer-query-content__paySecurely-gateways">
                                <Router>
                                    {paySecurelyGatewayLinks.map((item,index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={item.path}>
                                                    <img className="Footer-query-content__paySecurely-gateway" src={item.image} alt="no_image" />
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-social">
                <div className="Footer-social__icons">
                    <Router>
                        {footerIcons.map((item, index) => {
                            return (
                                <Link key={index} to={item.path}>
                                    <i className={`${item.icon} ${item.size}`}></i>
                                </Link>
                            )
                        })}
                    </Router>
                </div>
                <div className="Footer-social__links">
                    <Router>
                        {footerLinks.map((item, index) => {
                            return (
                                <Link key={index} className="Footer-social__link" to={item.path}>{item.name}</Link>
                            )
                        })}
                    </Router>
                </div>
            </div>
        </div>
    )
}
