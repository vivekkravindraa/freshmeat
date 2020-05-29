import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import classNames from 'classnames';
import Navigation from '../Navigation/Navigation';
import freshmeatLogoS from '../../../assets/HomeComponentAssets/freshmeatLogo/freshmeatLogoS.png';
import freshmeatBannerS from '../../../assets/HomeComponentAssets/freshmeatBanner/freshmeatBannerS.png';

import './Header.css';

const Header = () => {
    const [ activeSlide, setActiveSlide ] = useState(-1);
    const [ prevSlide, setPrevSlide ] = useState(-1);
    const [ sliderReady, setSliderReady ] = useState(false);

    const socialLinks = [
        { id: 1, path: "/", icon: "fab fa-facebook-f", size: 'fa-sm' },
        { id: 2, path: "/", icon: "fab fa-twitter", size: 'fa-sm' },
        { id: 3, path: "/", icon: "fab fa-instagram", size: 'fa-sm' },
        { id: 4, path: "/", icon: "fab fa-youtube", size: 'fa-sm' }
    ];

    const siteLinks = [
        { id: 1, path: "/", icon: "fas fa-user", size: 'fa-lg' },
        { id: 2, path: "/", icon: "fas fa-shopping-cart", size: 'fa-lg' },
        { id: 3, path: "/", icon: "fas fa-search", size: 'fa-lg' }
    ]

    const slides = [
        { image: freshmeatLogoS },
        { image: freshmeatBannerS },
        { image: freshmeatLogoS },
        { image: freshmeatBannerS }
    ]

    useEffect(() => {
        setTimeout(() => {
            setActiveSlide(0);
            setSliderReady(false);
        }, 0);
    }, []);

    const changeSlides = (change) => {
        const length = slides.length;
        const prevSlide = activeSlide;
        let activeSlide = prevSlide + change;
        if (activeSlide < 0) activeSlide = length - 1;
        if (activeSlide >= length) activeSlide = 0;
        setActiveSlide(activeSlide);
        setPrevSlide(prevSlide);
    }

    return (
        <div className="Header-container">
            <div className={classNames('slider', { 's--ready': sliderReady })}>
                <div className="slider__slides">
                    {slides.map((slide,index) => (
                        <div
                            className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index  })}
                            key={index}
                        >
                            <div style={{ backgroundImage: `${slide.image}`}} />
                        </div>
                    ))}
                </div>
            </div>
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
                    <img src={freshmeatLogoS} width="100" height="100" alt="no_image" />
                </div>
                <div className="Header-icons__site">
                    <Router className="Header-icons__site-router">
                        {siteLinks.map((item,index) => {
                            return (
                                <Link key={index} className="Header-icons__site-link" to={item.path}>
                                    <i className={`${item.icon} ${item.size}`}></i>
                                </Link>
                            )
                        })}
                    </Router>
                </div>
            </div>
            <Navigation />
            <div className="Header-content">
                <div className="Header-content__left-icon" onClick={() => changeSlides(-1)}>
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
                        We at Farm Meat believe in a way of life that recognizes and honours the diversity and interdependencies of all life.<br />
                        We believe that each one of us makes a difference in the world.
                    </p>
                </div>
                <div className="Header-content__right-icon" onClick={() => changeSlides(1)}>
                    <span><i className="fas fa-long-arrow-right"></i></span>
                </div>
            </div>
            <div className="Header-readmore__button">
                <button>Read More +</button>
            </div>
        </div>
    );
};

export default Header;
