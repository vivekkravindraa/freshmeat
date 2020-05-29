import React from 'react';
import healthS from '../../../assets/HomeComponentAssets/health/healthS.png';
import cutleryS from '../../../assets/HomeComponentAssets/cutlery/cutleryS.png';
import parcelS from '../../../assets/HomeComponentAssets/parcel/parcelS.png';
import certifiedS from '../../../assets/HomeComponentAssets/certified/certifiedS.png';

import './AboutUs.css';

export default function AboutUs() {
    return (
        <div className="AboutUs-container">
            <div className="AboutUs-container__top">
                <div className="AboutUs-content">
                    <p className="AboutUs-content__title">About Us <span>.</span><span>-</span></p>
                    <p className="AboutUs-content__sub-title">Raw Meat Production by leading Farms</p>
                    <p className="AboutUs-content__description">For meat to stay fresh and retain its natural juices, it needs to be stored at a temperature between 0° and 5°C. We maintain this temperature from the time we procure the product to cleaning, cutting and storing it, until it leaves for delivery. And even when it’s out for delivery.</p>
                    <div className="AboutUs-content__phone">
                        <i className="fas fa-phone-alt fa-3x"></i>
                        <p>+1800 753 23 56</p>
                    </div>
                    <div className="AboutUs-content__download">
                        <i className="fas fa-file-download fa-3x"></i>
                        <p>Download Price list</p>
                    </div>
                    <button className="AboutUs-content__read-more">Read More +</button>
                </div>
                <div className="AboutUs-image"></div>
            </div>
            <div className="AboutUs-container__bottom">
                <div className="AboutUs-banner">
                    <div className="AboutUs-banner__items">
                        <div className="AboutUs-banner__item">
                            <img src={healthS} alt="no_image" width="80" height="80" />
                            <p>Nutritious Organic meat</p>
                        </div>
                        <div className="AboutUs-banner__item">
                            <img src={parcelS} alt="no_image" width="80" height="80" />
                            <p>Convenient Vaccum Packaging</p>
                        </div>
                        <div className="AboutUs-banner__item">
                            <img src={cutleryS} alt="no_image" width="80" height="80" />
                            <p>International Quality certificate</p>
                        </div>
                        <div className="AboutUs-banner__item">
                            <img src={certifiedS} alt="no_image" width="80" height="80" />
                            <p>Proffesional Meat cutting</p>
                        </div>
                    </div>
                </div>
                <div className="AboutUs-info">
                    <div className="AboutUs-data">
                        <p className="AboutUs-description">
                            Our farm has been producing organic meat since 1999<br />
                            <span>We are trusted</span> by many clients from all over the country.
                        </p>
                    </div>
                    <div className="AboutUs-analytics">
                        <div className="AboutUs-analytics__items">
                            <div className="AboutUs-analytics__item">
                                <p className="AboutUs-analytics__item-quantity">300+</p>
                                <p className="AboutUs-analytics__item-description">Kilos Of Meat Sold Every day</p>
                            </div>
                            <div className="AboutUs-analytics__item">
                                <p className="AboutUs-analytics__item-quantity">120+</p>
                                <p className="AboutUs-analytics__item-description">Varieties of meat available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
