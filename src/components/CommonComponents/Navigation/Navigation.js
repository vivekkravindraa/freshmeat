import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

import './Navigation.css';

export default function Navigation(props) {
	const [ id, setId ] = useState(0);
	const [ isPathHome, setIsPathHome ] = useState(false);
	const history = useHistory();

	const navigationItems = [
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
					path: "/product-list",
					content: "All Products"
				},
				{
					id: 2,
					path: "/product-list/chicken",
					content: "Chicken"
				},
				{
					id: 3,
					path: "/product-list/seafood",
					content: "Seafood"
				},
				{
					id: 4,
					path: "/product-list/beef",
					content: "Beef"
				},
				{
					id: 5,
					path: "/product-list/goatandlamb",
					content: "Goat & Lamb"
				},
				{
					id: 6,
					path: "/product-list/eggs",
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

	// let geocoder;

	// const getLocation = () => {
	// 	if (navigator.geolocation) {
	// 	  	navigator.geolocation.getCurrentPosition(showPosition);
	// 	}
	// }
	  
	// const showPosition = (position) => {
	// 	const latitude = position.coords.latitude;
	// 	const longitude = position.coords.longitude;
	// 	codeLatLng(latitude, longitude);
	// }

	// useEffect(() => {
	// 	getLocation();
	// 	return () => {
	// 		getLocation();
	// 	}
	// }, []);

	const redirectRoute = (pathname) => {
		history.push(pathname);
	}

	useEffect(() => {
    	if(window.location.pathname !== "/") {
			return;
		} else {
			setIsPathHome(true);
		}
    }, []);

	return (
		<div className={`Navigation-container ${props.isNavigationTouched ? `showNavMenu` : `hideNavMenu`}`}>
			<nav className="Navigation-menu">
				<ul className="Navigation-menu-items">
					{navigationItems.map((item,index) => {
						return (
							<li key={index} className="Navigation-menu__item" onMouseEnter={() => setId(index + 1)} onMouseLeave={() => setId(0)}>
								<Router><Link className={`Navigation-menu__item-link ${isPathHome ? `defaultColor` : `changeColor`}`} to={item.path} onClick={() => redirectRoute(item.path)}>
									{item.content}
								</Link></Router>
								{index + 1 === id ? <span>-</span> : <span>+</span>}
								<div className={`Navigation-menu__subNavigation-dropdown ${index + 1 === id ? `showDropdown` : `hideDropdown`}`}>
									<ul className="Navigation-menu__subNavigation-items">
										{item.subNavigationItems.map((subItem, index) => {
											return (
												<li key={index} className="Navigation-menu__subNavigation-item">
													<Router><Link className="Navigation-menu__subNavigation-item-link" to={subItem.path} onClick={() => redirectRoute(subItem.path)}>
														{subItem.content}
													</Link></Router>
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
	)
}
