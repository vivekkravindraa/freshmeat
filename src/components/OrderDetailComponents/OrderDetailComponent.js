import React from 'react';
import OrderSummary from './OrderSummary/OrderSummary';
import PopularProducts from '../ProductComponents/PopularProducts/PopularProducts';
import ProductPricing from '../ProductComponents/ProductPricing/ProductPricing';
import Footer from '../HomeComponents/Footer/Footer';

export default function OrderDetailComponent() {
    return (
        <div>
            <OrderSummary />
            <PopularProducts />
            <ProductPricing />
            <Footer />
        </div>
    )
}
