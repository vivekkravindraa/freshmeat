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
                    return <PopularProductItem
                                selectedProduct={selectedProduct}
                                setSelectProduct={setSelectProduct}
                                item={item}
                                index={index}
                            />
                })}
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

export const PopularProductItem = (props) => (
    <div key={props.index} className={`PopularProducts-item ${props.index + 1 === props.selectedProduct ? `showShadow` : `hideShadow`}`} onClick={() => props.setSelectProduct(props.index + 1)}>
        <div className="PopularProducts-item-image"
            style={{ backgroundImage: `url(${props.item.productImage})` }}
        >
            <div className={`PopularProducts-item-button ${props.index + 1 === props.selectedProduct ? `showButton` : `hideButton`}`}>
                <button className="PopularProducts-item__addToBagButton">
                    ADD TO BAG +
                </button>
            </div>
        </div>
        <div className="PopularProducts-item-description">
            <p className="PopularProducts-item__title">{props.item.productTitle}</p>
            <p className="PopularProducts-item__type">{props.item.productType}</p>
            <p className="PopularProducts-item__quantity">{props.item.productQuantity}</p>
        </div>
        <div className="PopularProducts-item-details">
            <p className="PopularProducts-item__know-more">
                Know more<i className="fas fa-arrow-right"></i>
            </p>
            <p className={`PopularProducts-item__price ${props.index + 1 === props.selectedProduct ? `selected` : null}`}>{props.item.productPrice}</p>
        </div>
        <div className="PopularProducts-item-details-mobile">
            <p className={`PopularProducts-item__addProduct ${props.index + 1 === props.selectedProduct ? `hideAddProduct` : `showAddProduct`}`}>ADD +</p>
            <div className={`PopularProducts-quantityVariation ${props.index + 1 === props.selectedProduct ? `showQuantityVariation` : `hideQuantityVariation`}`}>   
                <button className="PopularProducts-decreaseButton">-</button>
                <input className="PopularProducts-inputValue" value={0} />
                <button className="PopularProducts-increaseButton">+</button>
            </div>
            <p className="PopularProducts-item__price">{props.item.productPrice}</p>
        </div>
    </div>
)
