import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productPricingItems } from './ProductPricingJsonData';

import './ProductPricing.css';

function ProductPricing(props) {
    const quantity = useSelector(state => state);
    const dispatch = useDispatch();

    const addToCart = () => dispatch({ type: 'INCREMENT' })
    const increment = () => dispatch({ type: 'INCREMENT' })
    const decrement = () => dispatch({ type: 'DECREMENT' })

    return (
        <div className="ProductPricing-container">
             <div className="ProductPricing-header">
                <p className="ProductPricing-header__title">Our Store's</p>
                <p className="ProductPricing-header__sub-title">PRODUCT PRICING</p>
            </div>
            <div className="ProductPricing-category-sort">
                <button>CHICKEN</button>
                <button>SEAFOOD</button>
                <button>BEEF</button>
                <button>GOAT &amp; LAMB</button>
            </div>
            <div className="ProductPricing-items">
                {productPricingItems.map((item, index) => {
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
                                            <button className="ProductPricing-addToCartButton" onClick={addToCart}>
                                                Add to Cart <span>+</span>
                                            </button>
                                        :
                                            <div className="ProductPricing-quantityVariation">   
                                                <button className="ProductPricing-decreaseButton" onClick={quantity === 0 ? null : decrement}>-</button>
                                                <input className="ProductPricing-inputValue" value={quantity} type="text" />
                                                <button className="ProductPricing-increaseButton" onClick={increment}>+</button>
                                            </div>
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
