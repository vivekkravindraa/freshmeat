import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './OrderSummary.css';

export default function OrderSummary() {
    return (
        <div className="OrderSummary-container">
            <div className="OrderSummary-notification">
                <div className="OrderSummary-notification__message">
                    <p className="OrderSummary-notification__orderStatus">Your Order is ready to be placed!</p>
                    <p className="OrderSummary-notification__amountStatus">Your total cart amount is <span>AED 230.00</span></p>
                    <p className="OrderSummary-notification__deliveryStatus">Your order can be delivered by <span>Wed, Dec 18th ‘19</span></p>
                </div>
                <div className="OrderSummary-notification__contact">
                    <p className="OrderSummary-notification__helpTitle">Need help?</p>
                    <p className="OrderSummary-notification__helpDescription">We are always here to help. Please call</p>
                    <p className="OrderSummary-notification__helpContact">+1800 753 23 56</p>
                </div>
            </div>

            <div className="OrderSummary-shoppingCart">
                <div className="OrderSummary-shoppingCart__activeCart">
                    <div className="OrderSummary-shoppingCart__activeCart-image">
                        <img alt="no_image" />
                    </div>
                    <div className="OrderSummary-shoppingCart__activeCart-content">
                        <p className="OrderSummary-shoppingCart__activeCart-title">Shopping Cart</p>
                        <p className="OrderSummary-shoppingCart__activeCart-description">Your cart contains 26 items</p>
                    </div>
                </div>
                <div className="OrderSummary-shoppingCart__userAccess">
                    <div className="OrderSummary-shoppingCart__userAccess-image">
                        <img alt="no_image" />
                    </div>
                    <div className="OrderSummary-shoppingCart__userAccess-content">
                        <p className="OrderSummary-shoppingCart__userAccess-title">Login/signup</p>
                        <p className="OrderSummary-shoppingCart__userAccess-description">
                            Login or signup for amazing deals and discounts
                        </p>
                    </div>
                </div>
                <div className="OrderSummary-shoppingCart__userPayment">
                    <div className="OrderSummary-shoppingCart__userPayment-image">
                        <img alt="no_image" />
                    </div>
                    <div className="OrderSummary-shoppingCart__userPayment-content">
                        <p className="OrderSummary-shoppingCart__userPayment-title">Delivery/payment</p>
                        <p className="OrderSummary-shoppingCart__userPayment-description">
                            We accept all types of payments
                        </p>
                    </div>
                </div>
            </div>

            <div className="OrderSummary-content">
                <div className="OrderSummary-content__shoppingBasket">
                    <p className="OrderSummary-content__shoppingBasket-title">Shopping Basket <span>4 items</span></p>
                    <div className="OrderSummary-content__shoppingBasket-items">
                        <div className="OrderSummary-content__shoppingBasket-item">
                            <div className="OrderSummary-content__shoppingBasket-image">
                                <img src="" alt="no_image" />
                            </div>
                            <div className="OrderSummary-content__shoppingBasket-item-content">
                                <p className="OrderSummary-content__shoppingBasket-item-title">FRESH CHICKEN CURRY CUT</p>
                                <p className="OrderSummary-content__shoppingBasket-item-quantity">500g, Vaccum package</p>
                                <p className="OrderSummary-content__shoppingBasket-item-price">AED 30.00</p>
                            </div>
                            <div className="OrderSummary-content__shoppingBasket-item-variations">
                                <div className="OrderSummary-content__shoppingBasket-item-quantityVariation">   
                                    <button className="OrderSummary-content__shoppingBasket-item-decreaseButton">-</button>
                                    <input className="OrderSummary-content__shoppingBasket-item-inputValue" defaultValue={0} type="text" />
                                    <button className="OrderSummary-content__shoppingBasket-item-increaseButton">+</button>
                                </div>
                                <Router>
                                    <Link to="/" className="OrderSummary-content__shoppingBasket-item-linkToRemove">
                                        <p>Remove</p>
                                    </Link>
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="OrderSummary-content__shoppingDetails">
                    <div className="OrderSummary-content__priceDetails">
                        <p className="OrderSummary-content__priceDetails-title">Price Details</p>
                        <div className="OrderSummary-content__priceDetails-content">
                            <p className="OrderSummary-content__priceDetails-priceTitle">
                                Price Details <span>(26 Items)</span>
                            </p>
                            <p className="OrderSummary-content__priceDetails-priceValue">AED 30.00</p>
                            <p className="OrderSummary-content__priceDetails-taxesTitle">
                                Taxes & Charges
                            </p>
                            <p className="OrderSummary-content__priceDetails-taxesValue">AED 10.00</p>

                            <p className="OrderSummary-content__priceDetails-deliveryTitle">
                                Delivery fee
                            </p>
                            <p className="OrderSummary-content__priceDetails-deliveryValue">FREE</p>
                        </div>
                        <div className="OrderSummary-content__priceDetails-total">
                            <p className="OrderSummary-content__priceDetails-totalTitle">Total Payable</p>
                            <p className="OrderSummary-content__priceDetails-totalValue">AED 40.00</p>
                        </div>
                    </div>
                    <div className="OrderSummary-content__proceedToPayment">
                        <button className="OrderSummary-content__proceedToPaymentButton">
                            PROCEED TO PAYMENT
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="OrderSummary-content__advertisement"></div>
                </div>
            </div>
        </div>
    )
}
