import React from 'react';

const PopularProductItems = ({ popularProductItems, selectedProduct, setSelectProduct }) => popularProductItems.map((item,index) => {
    return (
        <div key={index} className={`PopularProducts-item ${index + 1 === selectedProduct ? `showShadow` : `hideShadow`}`} onClick={() => setSelectProduct(index + 1)}>
            <div className="PopularProducts-item-image"
                style={{ backgroundImage: `url(${item.productImage})` }}
            >
                <div className={`PopularProducts-item-button ${index + 1 === selectedProduct ? `showButton` : `hideButton`}`}>
                    <button className="PopularProducts-item__addToBagButton">
                        ADD TO BAG +
                    </button>
                </div>
            </div>
            <div className="PopularProducts-item-description">
                <p className="PopularProducts-item__title">{item.productTitle}</p>
                <p className="PopularProducts-item__type">{item.productType}</p>
                <p className="PopularProducts-item__quantity">{item.productQuantity}</p>
            </div>
            <div className="PopularProducts-item-details">
                <p className="PopularProducts-item__know-more">
                    Know more<i className="fas fa-arrow-right"></i>
                </p>
                <p className={`PopularProducts-item__price ${index + 1 === selectedProduct ? `selected` : null}`}>{item.productPrice}</p>
            </div>
            <div className="PopularProducts-item-details-mobile">
                <p className={`PopularProducts-item__addProduct ${index + 1 === selectedProduct ? `hideAddProduct` : `showAddProduct`}`}>ADD +</p>
                <div className={`PopularProducts-quantityVariation ${index + 1 === selectedProduct ? `showQuantityVariation` : `hideQuantityVariation`}`}>   
                    <button className="PopularProducts-decreaseButton">-</button>
                    <input className="PopularProducts-inputValue" defaultValue={0} />
                    <button className="PopularProducts-increaseButton">+</button>
                </div>
                <p className="PopularProducts-item__price">{item.productPrice}</p>
            </div>
        </div>
    )})

export default PopularProductItems;