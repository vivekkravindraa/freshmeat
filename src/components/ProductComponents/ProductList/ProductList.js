import React from 'react';
import Header from '../../HomeComponents/Header/Header';
import { PopularProductItems } from '../../ProductComponents/PopularProducts/PopularProducts';
import Footer from '../../HomeComponents/Footer/Footer';

import './ProductList.css';

export default function ProductList() {
    return (
        <div>
            <Header />
            <PopularProductItems />
            <Footer />
        </div>
    )
}
