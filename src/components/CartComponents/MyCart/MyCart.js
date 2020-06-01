import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './MyCart.css';

export default function MyCart(props) {
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

                <div className="MyCart-item">

                    <div className="MyCart-item__data">
                        <div className="MyCart-item__image">
                            <img alt="no_image" />
                        </div>
                        <p className="MyCart-item__name">Fresh chicken curry cut</p>
                        <div className="MyCart-item__details">
                            <p className="MyCart-item__quantity">1 Kg</p>
                            <p className="MyCart-item__linkToRemoveItem">Remove</p>
                        </div>
                    </div>

                    <div className="MyCart-item__price">
                        <p className="MyCart-item__priceValue">AED 30.00</p>
                    </div>

                    <div className="MyCart-item__quantity">
                        <div className="MyCart-quantityVariation">   
                            <button className="MyCart-decreaseButton">-</button>
                            <input className="MyCart-inputValue" value={3} type="text" />
                            <button className="MyCart-increaseButton">+</button>
                        </div>
                    </div>

                    <div className="MyCart-item__subtotal">
                        <p>AED 30.00</p>
                    </div>

                </div>

                <div className="MyCart-item">

                    <div className="MyCart-item__data">
                        <div className="MyCart-item__image">
                            <img alt="no_image" />
                        </div>
                        <p className="MyCart-item__name">Fresh chicken curry cut</p>
                        <div className="MyCart-item__details">
                            <p className="MyCart-item__quantity">1 Kg</p>
                            <p className="MyCart-item__linkToRemoveItem">Remove</p>
                        </div>
                    </div>

                    <div className="MyCart-item__price">
                        <p className="MyCart-item__priceValue">AED 30.00</p>
                    </div>

                    <div className="MyCart-item__quantity">
                        <div className="MyCart-quantityVariation">   
                            <button className="MyCart-decreaseButton">-</button>
                            <input className="MyCart-inputValue" value={3} type="text" />
                            <button className="MyCart-increaseButton">+</button>
                        </div>
                    </div>

                    <div className="MyCart-item__subtotal">
                        <p>AED 30.00</p>
                    </div>

                </div>

            </div>

            <div className="MyCart-items__divider">
                <i className="fas fa-down-arrow"></i>
                <p className="MyCart-items__linkToViewAll">View All</p>
            </div>

            <div className="MyCart-summary">
                <div className="MyCart-summary__subtotal">
                    <p className="MyCart-summary__subtotal-title">Subtotal</p>
                    <p className="MyCart-summary__subtotal-price">AED 30.00</p>
                </div>
                <div className="MyCart-summary__delivery">
                    <p className="MyCart-summary__delivery-title">Delivery</p>
                    <p className="MyCart-summary__delivery-status">FREE</p>
                </div>
                <div className="MyCart-summary__nextDelivery">
                    <p className="MyCart-summary__nextDelivey-title">Next Delivery</p>
                    <p className="MyCart-summary__nextDelivery-schedule">Tomorrow 12:00 AM to 3:00 PM</p>
                </div>
            </div>

            <div className="MyCart-checkout">
                <button className="MyCart-checkout-button">Checkout<i className="fas fa-right-arrow"></i></button>
            </div>
        </div>
    )
}
