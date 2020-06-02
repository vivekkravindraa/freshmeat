import React from 'react';
import Header from './Header/Header';
import Category from './Category/Category';
import AboutUs from './AboutUs/AboutUs';
import PopularProducts from '../ProductComponents/PopularProducts/PopularProducts';
import Technologies from './Technologies/Technologies';
import PopularPricing from '../ProductComponents/PopularProducts/PopularProducts';
import Footer from './Footer/Footer';

export default function HomeComponent() {
    return (
        <div>
            <Header />
            <Category />
            <AboutUs />
            <PopularProducts />
            <Technologies />
            <PopularPricing />
            <Footer />
        </div>
    )
}
