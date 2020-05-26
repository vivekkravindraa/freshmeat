import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <div className="Header-icons">
                <div className="Header-icons__social">
                    <span className="Header-icons__social-label">Follow us - </span>
                    <Router className="Header-icons__social-router">
                        <Link className="Header-icons__social-link" to="/">
                            <i className="fab fa-facebook-f"></i>
                        </Link>    
                        <Link className="Header-icons__social-link" to="/">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="Header-icons__social-link" to="/">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="Header-icons__social-link" to="/">
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </Router>
                </div>
                <div className="Header-icons__main">
                    <img src="" width="100" height="100" alt="no_image" />
                </div>
                <div className="Header-icons__site">
                    <Router className="Header-icons__site-router">
                        <Link className="Header-icons__site-link" to="/">
                            <i className="fas fa-user"></i>
                        </Link>
                        <Link className="Header-icons__site-link" to="/">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                        <Link className="Header-icons__site-link" to="/">
                            <i className="fas fa-search"></i>
                        </Link>
                    </Router>
                </div>
            </div>
            <Navigation />
            <div className="Header-content">
                <div className="Header-content__left-icon">
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
                <div className="Header-content__right-icon">
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
