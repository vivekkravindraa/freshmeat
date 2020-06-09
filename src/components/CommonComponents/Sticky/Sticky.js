import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MyCart from '../../CartComponents/MyCart/MyCart';
import Navigation from '../Navigation/Navigation';

import freshmeatLogoS from '../../../assets/HomeComponentAssets/freshmeatLogo/freshmeatLogoS.png';

import './Sticky.css';

export default function Sticky() {
    const quantity = useSelector(state => state);

    const [ isCartTouched, setIsCartTouched ] = useState(false);
    const [ isNavigationTouched, setIsNavigationTouched ] = useState(false);
    
    const siteLinks = [
        { id: 1, path: "/", icon: "fas fa-user", size: 'fa-lg' },
        { id: 2, path: "/", icon: "fas fa-shopping-cart", size: 'fa-lg' },
        { id: 3, path: "/", icon: "fas fa-search", size: 'fa-lg' },
        { id: 4, path: "/", icon: "fas fa-bars", size: 'fa-lg' }
    ];

    return (
        <div className="Sticky-container">
            <div className="Sticky-icons__main">
                <img src={freshmeatLogoS} width="100" height="100" alt="no_image" />
            </div>
            <div className="Sticky-navigation__links">
                <Navigation isNavigationTouched={isNavigationTouched} />
            </div>
            <div className="Sticky-icons__site">
                <Router className="Sticky-icons__site-router">
                    {siteLinks.map((item,index) => {
                        return (
                            <Link key={index} className="Sticky-icons__site-link" to={item.path}
                                onClick={() => item.icon === "fas fa-shopping-cart"
                                ? setIsCartTouched(true)
                                : 
                                    item.icon === "fas fa-bars"
                                    ? setIsNavigationTouched(true)
                                    : null}
                            >
                                <i className={`${item.icon} ${item.size}`}></i>
                                {item.icon === "fas fa-shopping-cart" ? <span>{quantity ? quantity : 0}</span> : null}
                            </Link>
                        )
                    })}
                </Router>
            </div>
            <div className={`Sticky-cart-popup ${isCartTouched ? `showCartPopup` : `hideCartPopup`}`}>
                <MyCart closeCart={() => setIsCartTouched(false)} />
            </div>
        </div>
    )
}
