import React, { useState } from 'react';
import freshChickenS from '../../../assets/ProductComponentAssets/freshChicken/freshChickenS.png'; 
import goatAndLambS from '../../../assets/ProductComponentAssets/goatAndLamb/goatAndLambS.png';
import freshCatlaFishS from '../../../assets/ProductComponentAssets/freshCatlaFish/freshCatlaFishS.png';

import './PopularProducts.css';

export default function PopularProducts() {
    let [ selectedProduct, setSelectProduct ] = useState(1);

    let popularProductItems = [
        {
            productId: 1,
            productImage: freshChickenS,
            productTitle: 'Fresh chicken curry',
            productType: 'Cut with skin',
            productQuantity: '500 gms',
            productPrice: 'AED 20.00'
        },
        {
            productId: 2,
            productImage: goatAndLambS,
            productTitle: 'Fresh Mutton',
            productType: 'Halal cut',
            productQuantity: '1 Kg',
            productPrice: 'AED 20.00'
        },
        {
            productId: 3,
            productImage: freshCatlaFishS,
            productTitle: 'Fresh Catla Fish',
            productType: '3 Pieces',
            productQuantity: '450 gms',
            productPrice: 'AED 20.00'
        },
        {
            productId: 4,
            productImage: freshChickenS,
            productTitle: 'Fresh chicken curry',
            productType: 'Cut with skin',
            productQuantity: '500gms',
            productPrice: 'AED 20.00'
        }
    ];

    return (
        <div className="PopularProducts-container">
            <div className="PopularProducts-header">
                <p className="PopularProducts-header__title">Our Store's</p>
                <p className="PopularProducts-header__sub-title">POPULAR PRODUCTS</p>
            </div>
            <div className="PopularProducts-items">
                {popularProductItems.map((item,index) => {
                    return (
                        <div key={index} className={`PopularProducts-item ${index + 1 === selectedProduct ? `showShadow` : null}`} onClick={() => setSelectProduct(index + 1)}>
                            <div className="PopularProducts-item-image"
                                style={{ backgroundImage: `url(${item.productImage})` }}
                            >
                                <div className={`PopularProducts-item-button ${index + 1 === selectedProduct ? `showButton` : null}`}>
                                    <button className="PopularProducts-item__addToBagButton">
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
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
