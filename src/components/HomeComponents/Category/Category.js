import React, { useState } from 'react';  
import chickenS from '../../../assets/HomeComponentAssets/chicken/chickenS.png';
import seafoodS from '../../../assets/HomeComponentAssets/seafood/seafoodS.png';
import beefS from '../../../assets/HomeComponentAssets/beef/beefS.png';
import goatAndLambS from '../../../assets/ProductComponentAssets/goatAndLamb/goatAndLambS.png';

import './Category.css';

export default function Category() {
    const [ id, setId ] = useState(1);

    const categories = [
        {
            id: 1,
            categoryName: 'Chicken',
            categoryImage: chickenS
        },
        {
            id: 2,
            categoryName: 'Seafood',
            categoryImage: seafoodS
        },
        {
            id: 3,
            categoryName: 'Beef',
            categoryImage: beefS
        },
        {
            id: 4,
            categoryName: 'Goat & Lamb',
            categoryImage: goatAndLambS
        }
    ];

    return (
        <div className="Category">
            <div className="Category-container">
                <div className="Category-header">
                    <b className="Category-title">EXPLORE BY CATEGORIES</b>
                </div>         
                <div className="Category-items">
                    {categories.map((item, index) => {
                        return (
                            <div key={index} className={`Category-item ${index + 1 === id ? `showShadow` : `hideShadow`}`} onClick={() => setId(index + 1)}>
                                <div className="Category-image" style={{ backgroundImage: `url(${item.categoryImage})` }}></div>
                                <div className={`Category-name ${index + 1 === id ? `selected`: `notSelected`}`}>
                                    {item.categoryName.toUpperCase()}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="Category-content__icons">
                    <div className="Category-content__left-icon-mobile">
                        <span><i className="fas fa-long-arrow-left"></i></span>
                    </div> 
                    <div className="Category-content__right-icon-mobile">
                        <span><i className="fas fa-long-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
