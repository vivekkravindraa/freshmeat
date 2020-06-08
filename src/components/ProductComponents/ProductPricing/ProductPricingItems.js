import React from 'react';

const ProductPricingItems = ({ productPricingItems, filteredProducts, idx, quantity, addToCart, increment, decrement }) => (!filteredProducts.length ? productPricingItems.slice(0,8) : filteredProducts).map((item, index) => {
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
})

export default ProductPricingItems;
