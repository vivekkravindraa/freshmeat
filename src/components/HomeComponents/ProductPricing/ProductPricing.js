import React, { useState } from 'react';

import chickenFullS from '../../../assets/HomeComponentAssets/chickenFull/chickenFullS.png';
import chickenThighS from '../../../assets/HomeComponentAssets/chickenThigh/chickenThighS.png';
import legPieceS from '../../../assets/HomeComponentAssets/legPiece/legPieceS.png';
import chickenBreastS from '../../../assets/HomeComponentAssets/chickenBreast/chickenBreastS.png';

import './ProductPricing.css';

export default function ProductPricing() {
    const [ quantity, setQuantity ] = useState(0);

    const productPricingItems = [
        {
            productId: 1,
            productImage: chickenFullS,
            productName: 'Chicken full',
            productType: 'with skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productId: 2,
            productImage: chickenFullS,
            productName: 'Chicken full',
            productType: 'with skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productId: 3,
            productImage: chickenThighS,
            productName: 'Chicken thigh',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productId: 4,
            productImage: chickenThighS,
            productName: 'Chicken thigh',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00 '
        },{
            productId: 5,
            productImage: legPieceS,
            productName: 'Leg Piece',
            productType: 'with skin',
            productQuantity: '6 Pieces',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productId: 6,
            productImage: legPieceS,
            productName: 'Leg Piece',
            productType: 'with skin',
            productQuantity: '6 Pieces',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productId: 7,
            productImage: chickenBreastS,
            productName: 'Chicken Breast',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productId: 8,
            productImage: chickenBreastS,
            productName: 'Chicken Breast',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        }
    ];

    const decreaseQuantityHandler = () => {
        if(quantity !== 0) {
            setQuantity(quantity - 1);
        }
    }

    const inputQuantityChangeHandler = (e) => {
        setQuantity(e.target.value);
    }

    const increaseQuantityHandler = () => {
        setQuantity(quantity + 1);
    }

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
                                        <button className="ProductPricing-addToCartButton" onClick={() => setQuantity(quantity + 1)}>
                                            Add to Cart <span>+</span>
                                        </button>
                                        <div className="ProductPricing-quantityVariation">   
                                            <button className="ProductPricing-decreaseButton" onClick={() => decreaseQuantityHandler()}>-</button>
                                            <input className="ProductPricing-inputValue" value={quantity} type="text" onChange={(e) => inputQuantityChangeHandler(e)} />
                                            <button className="ProductPricing-increaseButton" onClick={() => increaseQuantityHandler()}>+</button>
                                        </div>
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
