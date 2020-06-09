import React from 'react';

import './Location.css';

export default function Location() {
    return (
        <div className="Location-container">
            <div className="Location-store">
                <i className="fas fa-location"></i>
                <p>Location Store</p>
            </div>
            <div className="Location-address">
                <i className="Location-store"></i>
                <p>My Location: #434, 7th main, 3rd stage...</p>
            </div>
            <div className="Location-appDownloads">
                <p>Download app</p>
                <i className="fab fa-android"></i>
                <i className="fab fa-apple"></i>
            </div>
        </div>
    )
}
