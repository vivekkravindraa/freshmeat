import React from 'react';
import temperatureS from '../../../assets/HomeComponentAssets/temperature/temperatureS.png';
import microscopeS from '../../../assets/HomeComponentAssets/microscope/microscopeS.png';
import certifiedS from '../../../assets/HomeComponentAssets/certified/certifiedS.png';

import './Technologies.css';

export default function Technologies() {
    return (
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
                        <img className="PopularProducts-technologies__concept-image" src={temperatureS} alt="no_image" height="60" />
                        <p className="PopularProducts-technologies__concept-title">Temperature Control</p>
                    </div>
                    <div className="PopularProducts-technologies__concept">
                        <img  className="PopularProducts-technologies__concept-image" src={microscopeS} alt="no_image" height="60" />
                        <p className="PopularProducts-technologies__concept-title">Anti bacterial treatment</p>
                    </div>
                    <div className="PopularProducts-technologies__concept">
                        <img  className="PopularProducts-technologies__concept-image" src={certifiedS} alt="no_image" height="60" />
                        <p className="PopularProducts-technologies__concept-title">Laboratory Testing</p>
                    </div>
                </div>
                <p className="PopularProducts-technologies__description">
                    Cras non dui id ex mattis vehicula. Nullam posuere ligula non libero mollis, non ornare sapien rutrum. Quisque vitae risus venenatis, dignissim felis id, vulputate nisl. Praesent sed felis aliquam, ullamcorper tellus.
                </p>
                <button className="PopularProducts-technologies__button">Read More <span>+</span></button>
            </div>
        </div>
    )
};
