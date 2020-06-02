import React from 'react';
import OrderSummary from './OrderSummary/OrderSummary';
import PopularProducts from '../ProductComponents/PopularProducts/PopularProducts';
import Footer from '../HomeComponents/Footer/Footer';

export default function OrderDetailComponent() {
    return (
        <div>
            <OrderSummary />
            <PopularProducts />
            <Footer />
        </div>
    )
}
