import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import freshChickenS from '../../../assets/HomeComponentAssets/freshChicken/freshChickenS.png'; 
import goatAndLambS from '../../../assets/HomeComponentAssets/goatAndLamb/goatAndLambS.png';
import freshCatlaFishS from '../../../assets/HomeComponentAssets/freshCatlaFish/freshCatlaFishS.png';

import './PopularProducts.css';

export default function PopularProducts() {
    return (
        <div className="PopularProducts-container">
            <div className="PopularProducts-title">
                <p>Our Store's</p>
                <p>POPULAR PRODUCTS</p>
            </div>
            <div className="PopularProducts-items">
                <div className="PopularProducts-item">
                    <div className="PopularProducts-item-image"
                        style={{ backgroundImage: `url(${freshChickenS})` }}
                    >
                        <button>ADD TO BAG <span>+</span></button>
                    </div>
                    <div className="PopularProducts-item-title">
                        <p>Fresh chicken curry Cut with skin 500 gms</p>
                    </div>
                    <div className="PopularProducts-item-price">
                        <Router><Link to="/"><p>Know more <i className="fas fa-arrow-right"></i></p></Link></Router>
                        <p>AED 20.00</p>
                    </div>
                </div>
                <div className="PopularProducts-item">
                    <div className="PopularProducts-item-image"
                        style={{ backgroundImage: `url(${goatAndLambS})` }}
                    >
                        <button>ADD TO BAG <span>+</span></button>
                    </div>
                    <div className="PopularProducts-item-title">
                        <p>Fresh Mutton Halal cut 1 Kg</p>
                    </div>
                    <div className="PopularProducts-item-price">
                        <Router><Link to="/"><p>Know more <i className="fas fa-arrow-right"></i></p></Link></Router>
                        <p>AED 20.00</p>
                    </div>
                </div>
                <div className="PopularProducts-item">
                    <div className="PopularProducts-item-image"
                        style={{ backgroundImage: `url(${freshCatlaFishS})` }}
                    >
                        <button>ADD TO BAG <span>+</span></button>
                    </div>
                    <div className="PopularProducts-item-title">
                        <p>Fresh Catla Fish 3 Pieces 450 gms</p>
                    </div>
                    <div className="PopularProducts-item-price">
                        <Router><Link to="/"><p>Know more <i className="fas fa-arrow-right"></i></p></Link></Router>
                        <p>AED 20.00</p>
                    </div>
                </div>
                <div className="PopularProducts-item">
                    <div className="PopularProducts-item-image"
                        style={{ backgroundImage: `url(${freshChickenS})` }}
                    >
                        <button>ADD TO BAG <span>+</span></button>
                    </div>
                    <div className="PopularProducts-item-title">
                        <p>Fresh chicken curry Cut with skin 500gms</p>
                    </div>
                    <div className="PopularProducts-item-price">
                        <Router><Link to="/"><p>Know more <i className="fas fa-arrow-right"></i></p></Link></Router>
                        <p>AED 20.00</p>
                    </div>
                </div>
            </div>
            <div className="PopularProducts-technologies">
                <div className="PopularProducts-technologies__image">
                    <div className="PopularProducts-technologies__quality">
                        <p>100%</p>
                        <p>Proven Quality</p>
                    </div>
                </div>
                <div className="PopularProducts-technologies__content">
                    <p className="PopularProducts-technologies__title">Technologies</p>
                    <p className="PopularProducts-technologies__sub-title">Quality Monitoring</p>
                    <div className="PopularProducts-technologies__concepts">
                        <div className="PopularProducts-technologies__concept">
                            <img className="PopularProducts-technologies__concept-image" src="" alt="no_image" />
                            <p className="PopularProducts-technologies__concept-title">Temperature Control</p>
                        </div>
                        <div className="PopularProducts-technologies__concept">
                            <img  className="PopularProducts-technologies__concept-image" src="" alt="no_image" />
                            <p className="PopularProducts-technologies__concept-title">Anti bacterial treatment</p>
                        </div>
                        <div className="PopularProducts-technologies__concept">
                            <img  className="PopularProducts-technologies__concept-image" src="" alt="no_image" />
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
