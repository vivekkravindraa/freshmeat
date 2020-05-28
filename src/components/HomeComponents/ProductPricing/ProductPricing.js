import React from 'react';

import chickenFullS from '../../../assets/HomeComponentAssets/chickenFull/chickenFullS.png';
import chickenThighS from '../../../assets/HomeComponentAssets/chickenThigh/chickenThighS.png';
import legPieceS from '../../../assets/HomeComponentAssets/legPiece/legPieceS.png';
import chickenBreastS from '../../../assets/HomeComponentAssets/chickenBreast/chickenBreastS.png';

import './ProductPricing.css';

export default function ProductPricing() {
    return (
        <div className="ProductPricing-container">
             <div className="ProductPricing-title">
                <p>Our Store's</p>
                <p>POPULAR PRODUCTS</p>
            </div>
            <div className="ProductPricing-category-sort">
                <button>CHICKEN</button>
                <button>SEAFOOD</button>
                <button>BEEF</button>
                <button>GOAT &amp; LAMB</button>
            </div>
            <div className="ProductPricing-items">
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{
                            backgroundImage: `url(${chickenFullS})`,
                        }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${chickenFullS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${chickenThighS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${chickenThighS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${legPieceS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${legPieceS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${chickenBreastS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
                <div className="ProductPricing-item">
                    <div className="ProductPricing-image"
                        style={{ backgroundImage: `url(${chickenBreastS})` }}
                    >
                    </div>
                    <div className="ProductPricing-content">
                        <p className="ProductPricing-name">Chicken full - with skin</p>
                        <p className="ProductPricing-qunatity">500g, Vaccum package</p>
                        <p className="ProductPricing-description">Lorem ipsum dolor sit amet, consectetur</p>
                        <button>Add to Cart <span>+</span></button>
                        <div>   
                            <button>-</button>
                            <input type="text" />
                            <button>+</button>
                        </div>
                        <p>AED 3.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
