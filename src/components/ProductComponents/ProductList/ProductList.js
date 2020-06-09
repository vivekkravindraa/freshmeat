import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Location from '../../CommonComponents/Location/Location';
import Filter from '../../CommonComponents/Filter/Filter';
import PopularProductItems from '../PopularProducts/PopularProductItems';
import popularProductItems from '../PopularProducts/PopularProductJsonData';
import CategorySortItems from '../ProductPricing/CategorySortItems';
import categorySortItems from '../ProductPricing/CategorySortJsonData';
import Footer from '../../HomeComponents/Footer/Footer';

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
    ]

    return (
        <div className="ProductList">
            <div className="ProductList-location">
                <Location />
            </div>
            <div className="ProductList-banner">
                <p className="ProductList-title">PRODUCT LIST</p>
                <div className="ProductList-breadcrumb-items">
                    {breadcrumbItems.map((bread, index) => {
                        return (
                        <li key={index} className="ProductList-breadcrumb-item"><Router><Link to={bread.path}>{bread.content}</Link></Router></li>
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
            <Footer />
        </div>
    )
}
