import React from 'react';  
import chickenS from '../../../assets/HomeComponentAssets/chicken/chickenS.png';
import seafoodS from '../../../assets/HomeComponentAssets/seafood/seafoodS.png';
import beefS from '../../../assets/HomeComponentAssets/beef/beefS.png';
import goatAndLambS from '../../../assets/HomeComponentAssets/goatAndLamb/goatAndLambS.png';

import './Category.css';

export default function Category() {
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
        <div className="Category-container">
            <div className="Category-title">
                <h1>EXPLORE BY CATEGORIES</h1>
            </div>
            <div className="Category-items">
                {categories.map((item, index) => {
                    return (
                        <div key={index} className="Category-item">
                            <div
                                className="Category-image"
                                style={{ backgroundImage: `url(${item.categoryImage})` }}>
                            </div>
                            <div className="Category-name">
                                {item.categoryName.toUpperCase()}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
