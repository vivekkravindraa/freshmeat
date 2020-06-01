import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MyCart from '../../CartComponents/MyCart/MyCart';
import Navigation from '../Navigation/Navigation';
import freshmeatLogoS from '../../../assets/HomeComponentAssets/freshmeatLogo/freshmeatLogoS.png';

import './Header.css';

const Header = () => {
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ translateValue, setTranslateValue ] = useState(0);
    const [ images ] = useState([
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg",
        "https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg"
    ]);
    const [ isCartTouched, setIsCartTouched ] = useState(false);

    const goToPrevSlide = () => {
        if(currentIndex === 0) {
            return;
        }
        setCurrentIndex(currentIndex - 1);
        setTranslateValue(translateValue + slideWidth());
    }

    const goToNextSlide = () => {
        if(currentIndex === images.length - 1) {
            setCurrentIndex(0)
            setTranslateValue(0)
        }
        setCurrentIndex(currentIndex + 1);
        setTranslateValue(translateValue + -(slideWidth()))
    }
  
    const slideWidth = () => {
       return document.querySelector('.slide').clientWidth;
    }

    const socialLinks = [
        { id: 1, path: "/", icon: "fab fa-facebook-f", size: 'fa-sm' },
        { id: 2, path: "/", icon: "fab fa-twitter", size: 'fa-sm' },
        { id: 3, path: "/", icon: "fab fa-instagram", size: 'fa-sm' },
        { id: 4, path: "/", icon: "fab fa-youtube", size: 'fa-sm' }
    ];

    const siteLinks = [
        { id: 1, path: "/", icon: "fas fa-user", size: 'fa-lg' },
        { id: 2, path: "/", icon: "fas fa-shopping-cart", size: 'fa-lg', cartQuantity: 4 },
        { id: 3, path: "/", icon: "fas fa-search", size: 'fa-lg' }
    ];

    return (
        <div className="Header">
            <div className="Header-container" style={{
                transform: `translateX(${translateValue}px)`,
                transition: 'transform ease-out 0.45s',
            }}>
                {images.map((image, i) => (
                    <div key={i} className="slide" style={{
                        backgroundImage : `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className="Header-icons">
                            <div className="Header-icons__social">
                                <p className="Header-icons__social-label">Follow Us<span>-</span></p>
                                <Router className="Header-icons__social-router">
                                    {socialLinks.map((item,index) => {
                                        return (
                                            <Link key={index} className="Header-icons__social-link" to={item.path}>
                                                <i className={`${item.icon} ${item.size}`}></i>
                                            </Link>
                                        )
                                    })}
                                </Router>
                            </div>
                            <div className="Header-icons__main">
                                <img src={freshmeatLogoS} width="115" height="115" alt="no_image" />
                            </div>
                            <div className="Header-icons__site">
                                <Router className="Header-icons__site-router">
                                    {siteLinks.map((item,index) => {
                                        return (
                                            <Link key={index} className="Header-icons__site-link" to={item.path} onClick={() => item.icon === "fas fa-shopping-cart" ? setIsCartTouched(true) : null}>
                                                <i className={`${item.icon} ${item.size}`}></i>
                                                {item.cartQuantity ? <span>{item.cartQuantity}</span> : null}
                                            </Link>
                                        )
                                    })}
                                </Router>
                            </div>
                        </div>
                        <Navigation />
                        <div className="Header-content">
                            <div className="Header-content__left-icon" onClick={() => goToPrevSlide()}>
                                <span><i className="fas fa-long-arrow-left"></i></span>
                            </div>
                            <div className="Header-content__info">
                                <p className="title">
                                    Organic Products
                                </p>
                                <p className="header">
                                    Raw Meat Farm
                                </p>
                                <p className="description">
                                    We at Fresh Meat believe in a way of life that recognizes and honours the diversity and interdependencies of all life.<br />
                                    We believe that each one of us makes a difference in the world.
                                </p>
                            </div>
                            {currentIndex === images.length - 1 ? null :
                                <div className="Header-content__right-icon" onClick={() => goToNextSlide()}>
                                <span><i className="fas fa-long-arrow-right"></i></span>
                            </div>}
                        </div>
                        <div className="Header-readmore__button">
                            <button>Read More +</button>
                        </div>
                        <div className={`Header-cart-popup ${isCartTouched ? `showCartPopup` : `hideCartPopup`}`}>
                            <MyCart closeCart={() => setIsCartTouched(false)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;
