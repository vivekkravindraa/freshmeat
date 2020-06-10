import React, { useState } from 'react';
import popularProductItems from '../../ProductComponents/PopularProducts/PopularProductJsonData';

import './Filter.css';

export default function Filter() {
    const filterByCategories = [
        'Chicken',
        'Seafood',
        'Beef',
        'Mutton & Lamb',
        'Uncategorized'
    ];

    const filterByProducts = [
        'Chicken',
        'Wings',
        'Beef',
        'Ribs'
    ];

    const [ searchedProducts, setSearchedProducts ] = useState([]); console.log(searchedProducts);
    const [ categoryFilters, setCategoryFilters ] = useState([]); console.log(categoryFilters);
    const [ price, setPrice ] = useState('0.00');
    const [ selectedTags, setSelectedTags ] = useState([]);

    const searchProducts = (e) => {
        const searchedResults = popularProductItems.filter((product) => {
            return product.category.categoryName.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0;
        });
        setSearchedProducts(searchedResults);
    }

    const filterByCategoriesHandle = (e) => {
        const nodes = document.getElementsByClassName('Filter-byCategories-checkboxInput');
        const selectedNodes = [];
        for(let i = 0; i < nodes.length; i++) {
            if(nodes[i].checked) {
                selectedNodes.push(nodes[i].value.toLowerCase());
            }
        }
        setCategoryFilters(...selectedNodes);
    }

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
                <input className="Filter-searchInput" type="text" placeholder="Search Products..." onChange={(e) => searchProducts(e)} />
                <i className="fas fa-search fa-lg"></i>
            </div>
            <div className="Filter-byCategories">
                <p className="Filter-byCategories-title">BY CATEGORIES</p>
                <div className="Filter-byCategories-items">
                    {filterByCategories.map((category, index) => {
                        return (
                            <div className="Filter-byCategories-item" key={index}>
                                <p value={category}>{category}</p>
                                <div className="Filter-byCategories-checkbox">
                                    <input
                                        className="Filter-byCategories-checkboxInput"
                                        type="checkbox"
                                        value={category}
                                        onChange={(e) => filterByCategoriesHandle(e)}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="Filter-byPrice">
                <p className="Filter-byPrice-title">BY PRICE</p>
                <input type="range" id="vol" name="vol" min="0" max="100" value={price} onChange={(e) => setPrice(e.target.value + '.00')} />
                <p className="Filter-byPrice-price">Price: AED 0.00 - AED {price}</p>
            </div>
            <div className="Filter-byProductTags">
                <p className="Filter-byProductTags-title">BY PRODUCT TAGS</p>
                <div className="Filter-byProductTags-items">
                    {filterByProducts.map((tag,index) => {
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
