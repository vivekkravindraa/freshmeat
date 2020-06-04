import React from 'react';
import Header from '../../HomeComponents/Header/Header';
import PopularProducts from '../../ProductComponents/PopularProducts/PopularProducts';
import Footer from '../../HomeComponents/Footer/Footer';

import './ProductList.css';

export default function ProductList() {
    return (
        <div>
            <Header />
            <PopularProducts />
            <Footer />
        </div>
    )
}
