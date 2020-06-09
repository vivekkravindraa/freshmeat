import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Location from '../../CommonComponents/Location/Location';
import Filter from '../../CommonComponents/Filter/Filter';
import PopularProductItems from '../PopularProducts/PopularProductItems';
import popularProductItems from '../PopularProducts/PopularProductJsonData';
import CategorySortItems from '../ProductPricing/CategorySortItems';
import categorySortItems from '../ProductPricing/CategorySortJsonData';
import Footer from '../../HomeComponents/Footer/Footer';
import Sticky from '../../CommonComponents/Sticky/Sticky';

import './ProductList.css';

export default function ProductList() {
    const breadcrumbItems = [
        {
            id: 1,
            path: "/",
            content: "Home"
        },
        {
            id: 2,
            path: "/products",
            content: "Products"
        },
        {
            id: 3,
            path: "/product-list",
            content: "All Products"
        }
    ];

    useEffect(() => {
        const header = document.getElementById("header");
        const sticky = header.offsetTop;
        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        });
        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <div className="ProductList">
            <div className="ProductList-location">
                <Location />
            </div>
            <div id="header" className="ProductList-stickyNavigation">
                <Sticky />
            </div>
            <div>
                <div className="ProductList-banner">
                    <p className="ProductList-title">PRODUCT LIST</p>
                    <div className="ProductList-breadcrumb-items">
                        {breadcrumbItems.map((breadcrumb, index) => {
                            return (
                            <li key={index} className="ProductList-breadcrumb-item"><Router><Link to={breadcrumb.path}>{breadcrumb.content}</Link></Router></li>
                            )
                        })}
                    </div>
                </div>
                <div className="ProductList-container">
                    <div className="ProductList-header">
                        <p className="ProductList-header__title">Our Store's</p>
                        <p className="ProductList-header__sub-title">PRODUCTS YOU MAY LIKE</p>
                    </div>
                    <div className="ProductList-content">
                        <div className="ProductList-filters">
                            <Filter />
                        </div>
                        <div className="ProductList-items">
                            <div className="ProductList-categorySortItems">
                                <CategorySortItems categorySortItems={categorySortItems} />
                            </div>
                            <div className="ProductList-popularProductItems">
                                <PopularProductItems popularProductItems={popularProductItems} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
