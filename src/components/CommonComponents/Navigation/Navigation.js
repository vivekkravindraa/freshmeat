import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import './Navigation.css';

export default function Navigation() {
	let [ id, setId ] = useState(0);
	let [ navMenuDisplay, setNavMenuDisplay ] = useState(false);
	const [ isSticky, setSticky ] = useState(false);
    const ref = useRef(null);

	let navigationItems = [
		{
			id: 1,
			path: "/",
			content: 'Home',
			subNavigationItems: []
		},
		{
			id: 2,
			path: "/products",
			content: "Products",
			subNavigationItems: [
				{
					id: 1,
					path: "/",
					content: "All Products"
				},
				{
					id: 2,
					path: "/",
					content: "Chicken"
				},
				{
					id: 3,
					path: "/",
					content: "Seafood"
				},
				{
					id: 4,
					path: "/",
					content: "Beef"
				},
				{
					id: 5,
					path: "/",
					content: "Goat & Lamb"
				},
				{
					id: 6,
					path: "/",
					content: "Eggs"
				}
			]
		},
		{
			id: 3,
			path: "/blogs",
			content: "Blogs",
			subNavigationItems: []
		},
		{
			id: 4,
			path: "/contact",
			content: "Contact",
			subNavigationItems: []
		},
		{
			id: 5,
			path: "/about_us",
			content: "AboutUs",
			subNavigationItems: []
		}
	];

	const handleScroll = () => {
		if (ref && ref.current && ref.current.getBoundingClientRect()) {
			setSticky(ref.current.getBoundingClientRect().top <= 0);
		}
	};
	
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', () => handleScroll);
        };
	}, []);

	return (
		<Router>
			<div className={`Navigation-container ${navMenuDisplay ? `showNavMenu` : `hideNavMenu`} ${isSticky && `sticky`}`} ref={ref}>
				<nav className={`Navigation-menu ${isSticky && `sticky`}`}>
					<ul className="Navigation-menu-items">
						{navigationItems.map((item,index) => {
							return (
								<li key={index} className="Navigation-menu__item" onMouseEnter={() => setId(index + 1)} onMouseLeave={() => setId(0)}>
									<Link className="Navigation-menu__item-link" to={item.path}>
										{item.content}
									</Link>
									{index + 1 === id ? <span>-</span> : <span>+</span>}
									<div className={`Navigation-menu__subNavigation-dropdown ${index + 1 === id ? `showDropdown` : `hideDropdown`}`}>
										<ul className="Navigation-menu__subNavigation-items">
											{item.subNavigationItems.map((item, index) => {
												return (
													<li key={index} className="Navigation-menu__subNavigation-item">
														<Link className="Navigation-menu__subNavigation-item-link" to={item.path}>
															{item.content}
														</Link>
													</li>
												)
											})}
										</ul>
									</div>
								</li>
							)
						})}
					</ul>
				</nav>
			</div>
			<div className="Navigation-menu__icon-mobile">
				<i className="fas fa-bars fa-2x" onClick={() => setNavMenuDisplay(true)}></i>
			</div>
		</Router>
	)
}