import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import chickenFullS from '../../../assets/ProductComponentAssets/chickenFull/chickenFullS.png';

import './MyCart.css';

export default function MyCart(props) {
    const [ subtotal ] = useState('30.00');

    const myCartItems = [
        {
            productId: 1,
            productImage: chickenFullS,
            productTitle: 'Fresh chicken curry cut',
            productQuantity: '1 kg',
            productPrice: '30.00',
            currencyType: 'AED'
        },
        {
            productId: 1,
            productImage: chickenFullS,
            productTitle: 'Fresh chicken curry cut',
            productQuantity: '1 kg',
            productPrice: '30.00',
            currencyType: 'AED'
        }
    ];

    return (
        <div className="MyCart-container">
            <div className="MyCart-header">
                <div className="MyCart-header__description">
                    <p className="MyCart-header__title">My Cart</p>
                    <p className="MyCart-header__lengthOfCartItems">26 items</p>
                </div>
                <div className="MyCart-header__closeCart">
                    <Router>
                        <Link className="MyCart-header__closeCartLink" onClick={() => props.closeCart()}>
                            <span className="MyCart-header__closeCartIndicator"><span>x</span></span>
                            <p className="MyCart-header__closeCartText">Close</p>
                        </Link>
                    </Router>
                </div>
            </div>
            <div className="MyCart-header__divider"></div>
            <div className="MyCart-items">
                <div className="MyCart-items__title">
                    <p className="MyCart-items__title-product">PRODUCT</p>
                    <p className="MyCart-items__title-price">PRICE</p>
                    <p className="MyCart-items__title-quantity">QTY</p>
                    <p className="MyCart-items__title-subtotal">SUBTOTAL</p>
                </div>
                {myCartItems.map((cartItem, index) => (
                    <div className="MyCart-item">
                        <div className="MyCart-item__data">
                            <div className="MyCart-item__image">
                                <img src={cartItem.productImage} alt="no_image" width={82} height={64} />
                            </div>
                            <div className="MyCart-item__content">
                                <p className="MyCart-item__name">{cartItem.productTitle}</p>
                                <div className="MyCart-item__details">
                                    <p className="MyCart-item__quantity">{cartItem.productQuantity}</p>
                                    <Router>
                                        <Link><p className="MyCart-item__linkToRemoveItem">Remove</p></Link>
                                    </Router>
                                </div>
                            </div>
                        </div>
                        <div className="MyCart-item__price">
                            <p className="MyCart-item__priceValue"><span>{cartItem.currencyType}</span> {cartItem.productPrice}</p>
                        </div>
                        <div className="MyCart-item__quantity">
                            <div className="MyCart-quantityVariation">   
                                <button className="MyCart-decreaseButton">-</button>
                                <input className="MyCart-inputValue" value={0} type="text" />
                                <button className="MyCart-increaseButton">+</button>
                            </div>
                        </div>
                        <div className="MyCart-item__subtotal">
                            <p className="MyCart-item__subtotalValue"><span>{cartItem.currencyType}</span> {subtotal}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="MyCart-items__divider">
                <span><i className="fas fa-angle-double-down"></i></span>
                <Router><Link><p className="MyCart-items__linkToViewAll">View All</p></Link></Router>
            </div>
            <div className="MyCart-summary">
                <div className="MyCart-summary__subtotal">
                    <p className="MyCart-summary__subtotal-title">Subtotal</p>
                    <p className="MyCart-summary__subtotal-price"><span>AED</span> 30.00</p>
                </div>
                <div className="MyCart-summary__delivery">
                    <p className="MyCart-summary__delivery-title">Delivery</p>
                    <p className="MyCart-summary__delivery-status">FREE</p>
                </div>
                <div className="MyCart-summary__nextDelivery">
                    <p className="MyCart-summary__nextDelivery-title">Next Delivery</p>
                    <p className="MyCart-summary__nextDelivery-schedule">Tomorrow 12:00 AM to 3:00 PM</p>
                </div>
            </div>
            <div className="MyCart-checkout">
                <button className="MyCart-checkout__button">Checkout<i className="fas fa-arrow-right"></i></button>
            </div>
        </div>
    )
}
