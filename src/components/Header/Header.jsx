import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Navigation from '../Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.svg';

import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Header-icons">
                    <div className="Header-icons__social">
                        <span className="Header-icons__social-label">Follow us - </span>
                        <Router className="Header-icons__social-router">
                            <Link className="Header-icons__social-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} />
                            </Link>    
                            <Link className="Header-icons__social-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} />
                            </Link>
                            <Link className="Header-icons__social-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} />
                            </Link>
                            <Link className="Header-icons__social-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} />
                            </Link>
                        </Router>
                    </div>
                    <div className="Header-icons__main">
                        <img src={logo} width="100" height="100" alt="no_image" />
                    </div>
                    <div className="Header-icons__site">
                        <Router className="Header-icons__site-router">
                            <Link className="Header-icons__site-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} size="2x" />
                            </Link>
                            <Link className="Header-icons__site-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} size="2x" />
                            </Link>
                            <Link className="Header-icons__site-link" to="/">
                                <FontAwesomeIcon icon={faCoffee} size="2x" />
                            </Link>
                        </Router>
                    </div>
                </div>
                <Navigation />
                <div className="Header-content">
                    <div className="Header-content__left-icon">
                        <FontAwesomeIcon icon={faCoffee} size="2x" />
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
                        <FontAwesomeIcon icon={faCoffee} size="2x" />
                    </div>
                </div>
                <div className="Header-readmore__button">
                    <button>Read More +</button>
                </div>
            </div>
        );
    };
};
