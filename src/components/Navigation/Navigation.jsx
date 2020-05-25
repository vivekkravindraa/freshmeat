import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

import './Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <Router>
                <div className="Navigation-container">
                    <nav className="Navigation-menu">
                        <ul className="Navigation-menu-items">
                            <li className="Navigation-menu__item">
                                <Link className="Navigation-menu__item-link" to="/"><button>Home <span>+</span></button></Link>
                            </li>
                            <li className="Navigation-menu__item">
                                <Link className="Navigation-menu__item-link" to="/products"><button>Products <span>+</span></button></Link>
                                <div className="Navigation-menu__products-dropdown">
                                    <Link className="Navigation-menu__products-dropdown-link" to="/">All Products</Link>
                                    <Link className="Navigation-menu__products-dropdown-link" to="/">Chicken</Link>
                                    <Link className="Navigation-menu__products-dropdown-link" to="/">Seafood</Link>
                                    <Link className="Navigation-menu__products-dropdown-link" to="/">Beef</Link>
                                    <Link className="Navigation-menu__products-dropdown-link" to="/">Goat & Lamb</Link>
                                    <Link className="Navigation-menu__products-dropdown-link" to="/">Eggs</Link>
                                </div>
                            </li>
                            <li className="Navigation-menu__item">
                                <Link className="Navigation-menu__item-link" to="/blogs"><button>Blogs <span>+</span></button></Link>
                            </li>
                            <li className="Navigation-menu__item">
                                <Link className="Navigation-menu__item-link" to="/contact"><button>Contact <span>+</span></button></Link>
                            </li>
                            <li className="Navigation-menu__item">
                                <Link className="Navigation-menu__item-link" to="/about_us"><button>About Us <span>+</span></button></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        )
    }
}
