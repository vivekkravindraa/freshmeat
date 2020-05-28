import React from 'react';

import chickenFullS from '../../../assets/HomeComponentAssets/chickenFull/chickenFullS.png';
import chickenThighS from '../../../assets/HomeComponentAssets/chickenThigh/chickenThighS.png';
import legPieceS from '../../../assets/HomeComponentAssets/legPiece/legPieceS.png';
import chickenBreastS from '../../../assets/HomeComponentAssets/chickenBreast/chickenBreastS.png';

import './ProductPricing.css';

export default function ProductPricing() {
    const productPricingItems = [
        {
            productImage: chickenFullS,
            productName: 'Chicken full',
            productType: 'with skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },
        {
            productImage: chickenFullS,
            productName: 'Chicken full',
            productType: 'with skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productImage: chickenThighS,
            productName: 'Chicken thigh',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productImage: chickenThighS,
            productName: 'Chicken thigh',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00 '
        },{
            productImage: legPieceS,
            productName: 'Leg Piece',
            productType: 'with skin',
            productQuantity: '6 Pieces',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productImage: legPieceS,
            productName: 'Leg Piece',
            productType: 'with skin',
            productQuantity: '6 Pieces',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productImage: chickenBreastS,
            productName: 'Chicken Breast',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        },{
            productImage: chickenBreastS,
            productName: 'Chicken Breast',
            productType: 'without skin',
            productQuantity: '500g',
            productPackage: 'Vaccum package',
            productDescription: 'Lorem ipsum dolor sit amet, consectetur',
            productPrice: 'AED 3.00'
        }
    ]

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
                                    <div>
                                        <button className="ProductPricing-addToCartButton">
                                            Add to Cart <span>+</span>
                                        </button>
                                        <div className="ProductPricing-quantityVariation">   
                                            <button className="ProductPricing-decreaseButton">-</button>
                                            <input type="text" />
                                            <button className="ProductPricing-increaseButton">+</button>
                                        </div>
                                    </div>
                                    <div>
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
