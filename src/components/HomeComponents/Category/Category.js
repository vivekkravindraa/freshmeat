import React, { useState } from 'react';  
import chickenS from '../../../assets/HomeComponentAssets/chicken/chickenS.png';
import seafoodS from '../../../assets/HomeComponentAssets/seafood/seafoodS.png';
import beefS from '../../../assets/HomeComponentAssets/beef/beefS.png';
import goatAndLambS from '../../../assets/HomeComponentAssets/goatAndLamb/goatAndLambS.png';

import './Category.css';

export default function Category() {
    const [ id, setId ] = useState(0);

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
            <div className="Category-header">
                <h1 className="Category-title">EXPLORE BY CATEGORIES</h1>
            </div>
            <div className="Category-items">
                {categories.map((item, index) => {
                    return (
                        <div key={index} className={`Category-item ${index + 1 === id ? `showShadow` : null}`} onClick={() => setId(index + 1)}>
                            <div
                                className="Category-image"
                                style={{ backgroundImage: `url(${item.categoryImage})` }}>
                            </div>
                            <div className={`Category-name ${index + 1 === id ? `selected`: null}`}>
                                {item.categoryName.toUpperCase()}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
