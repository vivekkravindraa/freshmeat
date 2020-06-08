import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import productPricingItems from './ProductPricingJsonData';
import ProductPricingItems from './ProductPricingItems';

import categorySortItems from './CategorySortJsonData';
import CategorySortItems from './CategorySortItems';

import './ProductPricing.css';

function ProductPricing(props) {
    const [ idx, setIndex] = useState(0);

    const quantity = useSelector(state => state);
    const dispatch = useDispatch();

    const addToCart = (index) => {
        setIndex(index + 1);
        dispatch({ type: 'INCREMENT' });
    }
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });

    const [ filteredProducts, setFilteredProducts ] = useState([]);

    const filterProducts = (e) => {
        let prodcutsFilteredByCategory = productPricingItems.filter((product) => {
            return e.target.value === product.category.categoryName;
        });
        setFilteredProducts(prodcutsFilteredByCategory);
    }

    return (
        <div className="ProductPricing-container">
             <div className="ProductPricing-header">
                <p className="ProductPricing-header__title">Our Store's</p>
                <p className="ProductPricing-header__sub-title">PRODUCT PRICING</p>
            </div>
            <div className="ProductPricing-category-sort">
                <CategorySortItems
                    categorySortItems={categorySortItems}
                    filterProducts={filterProducts}
                />
            </div>
            <div className="ProductPricing-items">
                <ProductPricingItems
                    productPricingItems={productPricingItems}
                    filteredProducts={filteredProducts}
                    idx={idx}
                    quantity={quantity}
                    addToCart={addToCart}
                    increment={increment}
                    decrement={decrement}
                />
            </div>
        </div>
    )
}

export default ProductPricing;
