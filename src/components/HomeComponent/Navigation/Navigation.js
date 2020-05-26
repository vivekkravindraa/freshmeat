import React from 'react';
import {
	BrowserRouter as Router,
	Link
} from "react-router-dom";

import './Navigation.css';

export default function Navigation() {
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
	]

	return (
		<Router>
			<div className="Navigation-container">
				<nav className="Navigation-menu">
					<ul className="Navigation-menu-items">
						{navigationItems.map((item,index) => {
							return (
								<li key={index} className="Navigation-menu__item">
									<Link className="Navigation-menu__item-link" to={item.path}>
										<button>{item.content}<span> + </span></button>
									</Link>
									<div className="Navigation-menu__subNavigation-dropdown">
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
		</Router>
	)
}