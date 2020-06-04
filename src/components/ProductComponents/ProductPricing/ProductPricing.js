import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productPricingItems } from './ProductPricingJsonData';

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
                <button onClick={(e) => filterProducts(e)} value="chicken">CHICKEN</button>
                <button onClick={(e) => filterProducts(e)} value="seafood">SEAFOOD</button>
                <button onClick={(e) => filterProducts(e)} value="beef">BEEF</button>
                <button onClick={(e) => filterProducts(e)} value="goat">GOAT &#38; LAMB</button>
            </div>
            <div className="ProductPricing-items">
                {(!filteredProducts.length ? productPricingItems.slice(0,8) : filteredProducts).map((item, index) => {
                    return (
                        <div key={index} className="ProductPricing-item">
                            <div className="ProductPricing-image"
                                style={{
                                    backgroundImage: `url(${item.productImage})`,
                                }}
                            >
                            </div>
                            <div className="ProductPricing-content">
                                <p className="ProductPricing-name">{item.productName} - {item.productType}</p>
                                <p className="ProductPricing-quantity">{item.productQuantity}, {item.productPackage}</p>
                                <p className="ProductPricing-description">{item.productDescription}</p>
                                <div className="ProductPricing-cart-options">
                                    <div className="ProductPricing-cart-opertaions">
                                    {
                                        !quantity ?
                                            <button className="ProductPricing-addToCartButton" onClick={() => addToCart(index)}>
                                                Add to Cart <span>+</span>
                                            </button>
                                        :
                                            idx === item.productId ?
                                                <div className="ProductPricing-quantityVariation">   
                                                    <button className="ProductPricing-decreaseButton" onClick={quantity === 0 ? null : decrement}>-</button>
                                                    <input className="ProductPricing-inputValue" value={quantity} type="text" onChange={() => {}} />
                                                    <button className="ProductPricing-increaseButton" onClick={increment}>+</button>
                                                </div>
                                            :
                                                <button className="ProductPricing-addToCartButton" onClick={() => addToCart(index)}>
                                                    Add to Cart <span>+</span>
                                                </button>
                                    }
                                    </div>
                                    <div className="ProductPricing-cart-price">
                                        <p className="ProductPricing-price">{item.productPrice}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
  
export default ProductPricing;
