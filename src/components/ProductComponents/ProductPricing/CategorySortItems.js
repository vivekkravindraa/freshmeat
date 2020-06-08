import React from 'react';

const CategorySortItems = ({ categorySortItems, filterProducts, category }) => categorySortItems.map((item, index) => {
    return (
        <button className={`${category === item.categoryName ? `selected` : ``}`} key={index} onClick={(e) => filterProducts(e)} value={item.categoryName}>
            {item.categoryName.toUpperCase()}
        </button>
    )
})

export default CategorySortItems;
