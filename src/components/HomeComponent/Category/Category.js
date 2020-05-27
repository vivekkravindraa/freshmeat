import React from 'react';  
import chicken from '../../../assets/HomeComponentAssets/chicken/chicken.png';
import seafood from '../../../assets/HomeComponentAssets/seafood/seafood.png';
import beef from '../../../assets/HomeComponentAssets/beef/beef.png';
import goatAndLamb from '../../../assets/HomeComponentAssets/goatAndLamb/goatAndLamb.png';

import './Category.css';

export default function Category() {
    const categories = [
        {
            id: 1,
            categoryName: 'Chicken',
            categoryImage: chicken
        },
        {
            id: 2,
            categoryName: 'Seafood',
            categoryImage: seafood
        },
        {
            id: 3,
            categoryName: 'Beef',
            categoryImage: beef
        },
        {
            id: 4,
            categoryName: 'Goat & Lamb',
            categoryImage: goatAndLamb
        }
    ];

    return (
        <div className="Category-container">
            <div className="Category-title">
                <h1>EXPLORE BY CATEGORIES</h1>
            </div>
            {categories.map((item, index) => {
                return (
                    <div key={index} className="Category-item">
                        <div className="Category-item__image" style={{ backgroundImage: `url(${item.categoryImage})` }}></div>
                        <p className="Category-item__name">{item.categoryName.toUpperCase()}</p>
                    </div>
                )
            })}
        </div>
    );
};
