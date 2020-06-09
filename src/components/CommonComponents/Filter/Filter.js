import React, { useState } from 'react';

import './Filter.css';

export default function Filter() {
    const [ selectedTags, setSelectedTags ] = useState([]);

    const filterByCategoryOptions = [
        'Chicken',
        'Seafood',
        'Beef',
        'Mutton & Lamb',
        'Uncategorized'
    ];

    const filterByProductTags = [
        'Chicken',
        'Wings',
        'Beef',
        'Ribs'
    ];

    const selectTagHandle = (index) => {
        let tags = selectedTags;

        if(tags.length === 0) {
            setSelectedTags([index + 1])
        }
        
        if(tags.length > 0) {
            let i = tags.indexOf(index + 1)
            if(i !== -1) {
                tags.splice(i, 1);
                setSelectedTags([...tags]);
            } else {
                setSelectedTags([...tags, index + 1])
            }
        }
    }

    return (
        <div className="Filter-container">
            {/* <div className="Filter-header">
                <i className="fas fa-filter"></i>
                <p>Filter</p>
            </div> */}
            <div className="Filter-header">
                <input type="text" placeholder="Search Products..." />
                <i className="fas fa-search fa-lg"></i>
            </div>
            <div className="Filter-byCategories">
                <p className="Filter-byCategories-title">BY CATEGORIES</p>
                <div className="Filter-byCategories-items">
                    {filterByCategoryOptions.map((option, index) => {
                        return (
                            <div className="Filter-byCategories-item" key={index}>
                                <p value={option}>{option}</p>
                                <div className="Filter-byCategories-checkbox">
                                    <input type="checkbox" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Filter-byPrice">
                <p className="Filter-byPrice-title">BY PRICE</p>
                <input type="range" id="vol" name="vol" min="0" max="50" />
                <p className="Filter-byPrice-price">Price: AED 0.00 - AED 100.00</p>
            </div>
            <div className="Filter-byProductTags">
                <p className="Filter-byProductTags-title">BY PRODUCT TAGS</p>
                <div className="Filter-byProductTags-items">
                    {filterByProductTags.map((tag,index) => {
                        return (
                            <button
                                className={`Filter-byProductTags-item`}
                                key={index}
                                onClick={() => selectTagHandle(index)}
                            >
                                {tag.toUpperCase()}
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
