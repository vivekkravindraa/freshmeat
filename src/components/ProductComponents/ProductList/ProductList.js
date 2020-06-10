import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Location from '../../CommonComponents/Location/Location';
import Filter from '../../CommonComponents/Filter/Filter';

import categorySortItems from '../ProductPricing/CategorySortJsonData';
// import CategorySortItems from '../ProductPricing/CategorySortItems';

import popularProductItems from '../PopularProducts/PopularProductJsonData';
// import PopularProductItems from '../PopularProducts/PopularProductItems';

import Footer from '../../HomeComponents/Footer/Footer';
import Sticky from '../../CommonComponents/Sticky/Sticky';

import './ProductList.css';

export default function ProductList(props) {
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

    const [ category, setCategory ] = useState('chicken');
    const [ selectedProduct, setSelectProduct ] = useState(1);
    const [ filteredPopularProducts, setFilterPopularProducts ] = useState([]);

    const filterPopularProducts = (e) => {
        const value = e.target.value;
        const prodcutsFilteredByCategory = popularProductItems.filter((product, index) => {
            return value === product.category.categoryName;
        });
        setCategory(value);
        setFilterPopularProducts(prodcutsFilteredByCategory);
    }

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
                                {/* <CategorySortItems
                                    categorySortItems={categorySortItems}
                                /> */}
                                {categorySortItems.map((item, index) => {
                                    return (
                                        <button className={`${category === item.categoryName ? `selected` : ``}`} key={index} onClick={(e) => filterPopularProducts(e)} value={item.categoryName}>
                                            {item.categoryName.toUpperCase()}
                                        </button>
                                    )
                                })}
                            </div>
                            <div className="ProductList-popularProductItems">
                                {/* <PopularProductItems
                                    popularProductItems={popularProductItems}
                                /> */}
                                {(!filteredPopularProducts.length ? popularProductItems.slice(0,9) : filteredPopularProducts).map((item,index) => {
                                    return (
                                        <div key={index} className={`PopularProducts-item ${index + 1 === selectedProduct ? `showShadow` : `hideShadow`}`} onClick={() => setSelectProduct(index + 1)}>
                                            <div className="PopularProducts-item-image"
                                                style={{ backgroundImage: `url(${item.productImage})` }}
                                            >
                                                <div className={`PopularProducts-item-button ${index + 1 === selectedProduct ? `showButton` : `hideButton`}`}>
                                                    <button className="PopularProducts-item__addToBagButton changeBackground">
                                                        ADD TO BAG +
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="PopularProducts-item-description">
                                                <p className="PopularProducts-item__title">{item.productTitle}</p>
                                                <p className="PopularProducts-item__type">{item.productType}</p>
                                                <p className="PopularProducts-item__quantity">{item.productQuantity}</p>
                                            </div>
                                            <div className="PopularProducts-item-details">
                                                <p className="PopularProducts-item__know-more">
                                                    Know more<i className="fas fa-arrow-right"></i>
                                                </p>
                                                <p className={`PopularProducts-item__price ${index + 1 === selectedProduct ? `selected` : null}`}>{item.productPrice}</p>
                                            </div>
                                            <div className="PopularProducts-item-details-mobile">
                                                <p className={`PopularProducts-item__addProduct ${index + 1 === selectedProduct ? `hideAddProduct` : `showAddProduct`}`}>ADD +</p>
                                                <div className={`PopularProducts-quantityVariation ${index + 1 === selectedProduct ? `showQuantityVariation` : `hideQuantityVariation`}`}>   
                                                    <button className="PopularProducts-decreaseButton">-</button>
                                                    <input className="PopularProducts-inputValue" defaultValue={0} />
                                                    <button className="PopularProducts-increaseButton">+</button>
                                                </div>
                                                <p className="PopularProducts-item__price">{item.productPrice}</p>
                                            </div>
                                        </div>
                                    )})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
