import React from 'react';
import Header from './Header/Header';
import Category from './Category/Category';
import AboutUs from './AboutUs/AboutUs';
import PopularProducts from './PopularProducts/PopularProducts';
import PopularPricing from './ProductPricing/ProductPricing';
import Footer from './Footer/Footer';

export default function HomeComponent() {
    return (
        <div>
            <Header />
            <Category />
            <AboutUs />
            <PopularProducts />
            <PopularPricing />
            <Footer />
        </div>
    )
}
