import React from 'react';

const CategorySortItems =  ({ categorySortItems, filterProducts }) => categorySortItems.map((category, index) => {
    return (
        <button key={index} onClick={(e) => filterProducts(e)} value={category.categoryName}>
            {category.categoryName.toUpperCase()}
        </button>
    )
})

export default CategorySortItems;
