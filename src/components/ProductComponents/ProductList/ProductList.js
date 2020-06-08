import React from 'react';
import Header from '../../HomeComponents/Header/Header';
import PopularProductItems from '../PopularProducts/PopularProductItems';
import popularProductItems from '../PopularProducts/PopularProductJsonData';
import CategorySortItems from '../ProductPricing/CategorySortItems';
import categorySortItems from '../ProductPricing/CategorySortJsonData'
import Footer from '../../HomeComponents/Footer/Footer';

import './ProductList.css';

export default function ProductList() {
    return (
        <div>
            <Header />
            <div className="ProductList-content">
                <div className="ProductList-header">
                    <p className="ProductList-header__title">Our Store's</p>
                    <p className="ProductList-header__sub-title">PRODUCTS YOU MAY LIKE</p>
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
            <Footer />
        </div>
    )
}
