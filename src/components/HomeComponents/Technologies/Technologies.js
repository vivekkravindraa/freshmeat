import React from 'react';
import temperatureS from '../../../assets/HomeComponentAssets/temperature/temperatureS.png';
import microscopeS from '../../../assets/HomeComponentAssets/microscope/microscopeS.png';
import certifiedS from '../../../assets/HomeComponentAssets/certified/certifiedS.png';

import './Technologies.css';

export default function Technologies() {
    return (
        <div className="Technologies">
            <div className="Technologies__image">
                <div className="Technologies__quality">
                    <p className="Technologies__quality-percentage">100%</p>
                    <p className="Technologies__quality-standard">Proven Quality</p>
                </div>
            </div>
            <div className="Technologies__content">
                <p className="Technologies__title">Technologies</p>
                <p className="Technologies__sub-title">Quality Monitoring</p>
                <div className="Technologies__concepts">
                    <div className="Technologies__concept">
                        <img className="Technologies__concept-image" src={temperatureS} alt="no_image" height="60" />
                        <p className="Technologies__concept-title">Temperature Control</p>
                    </div>
                    <div className="Technologies__concept">
                        <img  className="Technologies__concept-image" src={microscopeS} alt="no_image" height="60" />
                        <p className="Technologies__concept-title">Anti bacterial treatment</p>
                    </div>
                    <div className="Technologies__concept">
                        <img  className="Technologies__concept-image" src={certifiedS} alt="no_image" height="60" />
                        <p className="Technologies__concept-title">Laboratory Testing</p>
                    </div>
                </div>
                <p className="Technologies__description">
                    Cras non dui id ex mattis vehicula. Nullam posuere ligula non libero mollis, non ornare sapien rutrum. Quisque vitae risus venenatis, dignissim felis id, vulputate nisl. Praesent sed felis aliquam, ullamcorper tellus.
                </p>
                <button className="Technologies__button">Read More <span>+</span></button>
            </div>
        </div>
    )
};
