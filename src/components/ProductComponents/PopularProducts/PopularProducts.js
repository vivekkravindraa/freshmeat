import React, { useState } from 'react';
import popularProductItems from './PopularProductJsonData';
import PopularProductItems from './PopularProductItems';
import './PopularProducts.css';

export default function PopularProducts() {
    const [ selectedProduct, setSelectProduct ] = useState(1);

    return (
        <div className="PopularProducts-container">
            <div className="PopularProducts-header">
                <p className="PopularProducts-header__title">Our Store's</p>
                <p className="PopularProducts-header__sub-title">POPULAR PRODUCTS</p>
            </div>
            <div className="PopularProducts-items">
                <PopularProductItems
                    popularProductItems={popularProductItems}
                    selectedProduct={selectedProduct}
                    setSelectProduct={setSelectProduct}
                />
            </div>
            <div className="PopularProducts-content__icons">
                <div className="PopularProducts-content__left-icon-mobile">
                    <span><i className="fas fa-long-arrow-left"></i></span>
                </div> 
                <div className="PopularProducts-content__right-icon-mobile">
                    <span><i className="fas fa-long-arrow-right"></i></span>
                </div>
            </div>
        </div>
    )
}
