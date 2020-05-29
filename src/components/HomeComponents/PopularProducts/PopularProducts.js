import React from 'react';
import freshChickenS from '../../../assets/HomeComponentAssets/freshChicken/freshChickenS.png'; 
import goatAndLambS from '../../../assets/HomeComponentAssets/goatAndLamb/goatAndLambS.png';
import freshCatlaFishS from '../../../assets/HomeComponentAssets/freshCatlaFish/freshCatlaFishS.png';

import freshmeatRaw from '../../../assets/HomeComponentAssets/freshmeatRaw/freshmeatRaw.png';

import './PopularProducts.css';

export default function PopularProducts() {
    let popularProductItems = [
        {
            productId: 1,
            productImage: freshChickenS,
            productTitle: 'Fresh chicken',
            productType: 'curry Cut with skin',
            productQuantity: '500 gms',
            productPrice: 'AED 20.00'
        },
        {
            productId: 2,
            productImage: goatAndLambS,
            productTitle: 'Fresh Mutton',
            productType: 'Halal cut',
            productQuantity: '1 Kg',
            productPrice: 'AED 20.00'
        },
        {
            productId: 3,
            productImage: freshCatlaFishS,
            productTitle: 'Fresh Catla Fish',
            productType: '3 Pieces',
            productQuantity: '450 gms',
            productPrice: 'AED 20.00'
        },
        {
            productId: 4,
            productImage: freshChickenS,
            productTitle: 'Fresh chicken',
            productType: 'curry Cut with skin',
            productQuantity: '500gms',
            productPrice: 'AED 20.00'
        }
    ];

    return (
        <div className="PopularProducts-container">
            <div className="PopularProducts-header">
                <p className="PopularProducts-header__title">Our Store's</p>
                <p className="PopularProducts-header__sub-title">POPULAR PRODUCTS</p>
            </div>
            <div className="PopularProducts-items">
                {popularProductItems.map((item,index) => {
                    return (
                        <div key={index} className="PopularProducts-item">
                            <div className="PopularProducts-item-image"
                                style={{ backgroundImage: `url(${item.productImage})` }}
                            >
                                <div className="PopularProducts-item-button">
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
                                <p className="PopularProducts-item__price">{item.productPrice}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="PopularProducts-technologies">
                <div className="PopularProducts-technologies__image">
                    <div className="PopularProducts-technologies__quality">
                        <p className="PopularProducts-technologies__quality-percentage">100%</p>
                        <p className="PopularProducts-technologies__quality-standard">Proven Quality</p>
                    </div>
                </div>
                <div className="PopularProducts-technologies__content">
                    <p className="PopularProducts-technologies__title">Technologies</p>
                    <p className="PopularProducts-technologies__sub-title">Quality Monitoring</p>
                    <div className="PopularProducts-technologies__concepts">
                        <div className="PopularProducts-technologies__concept">
                            <img className="PopularProducts-technologies__concept-image" src={freshmeatRaw} alt="no_image" width="80" height="80" />
                            <p className="PopularProducts-technologies__concept-title">Temperature Control</p>
                        </div>
                        <div className="PopularProducts-technologies__concept">
                            <img  className="PopularProducts-technologies__concept-image" src={freshmeatRaw} alt="no_image" width="80" height="80" />
                            <p className="PopularProducts-technologies__concept-title">Anti bacterial treatment</p>
                        </div>
                        <div className="PopularProducts-technologies__concept">
                            <img  className="PopularProducts-technologies__concept-image" src={freshmeatRaw} alt="no_image" width="80" height="80" />
                            <p className="PopularProducts-technologies__concept-title">Laboratory Testing</p>
                        </div>
                    </div>
                    <p className="PopularProducts-technologies__description">
                        Cras non dui id ex mattis vehicula. Nullam posuere ligula non libero mollis, non ornare sapien rutrum. Quisque vitae risus venenatis, dignissim felis id, vulputate nisl. Praesent sed felis aliquam, ullamcorper tellus.
                    </p>
                    <button className="PopularProducts-technologies__button">Read More <span>+</span></button>
                </div>
            </div>
        </div>
    )
}
