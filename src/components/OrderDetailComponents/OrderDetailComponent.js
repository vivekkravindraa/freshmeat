import React from 'react';
import Footer from '../HomeComponents/Footer/Footer';
// import Navigation from '../CommonComponents/Navigation/Navigation';
import OrderSummary from './OrderSummary/OrderSummary';
import PopularProducts from '../ProductComponents/PopularProducts/PopularProducts';

export default function OrderDetailComponent() {
    return (
        <div>
            {/* <Navigation /> */}
            <OrderSummary />
            <PopularProducts />
            <Footer />
        </div>
    )
}
