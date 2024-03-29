import React from 'react'
import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';
import { Button } from './button';

function Cards() {
    return (
        <div className='gallery-container'>
            <div className="gallery">
                <div className="row">
                <img src={process.env.PUBLIC_URL + "/images/processed (7).jpeg"} alt="Gallery Item" />
                    <img src={process.env.PUBLIC_URL + "/images/processed (20).jpeg"} alt="Gallery Item" />
                </div>
                <div className="row">
                    <img src={process.env.PUBLIC_URL + "/images/processed (8).jpeg"} alt="Gallery Item" />
                    <img src={process.env.PUBLIC_URL + "/images/processed (40).jpeg"} alt="Gallery Item" />
                    <img src={process.env.PUBLIC_URL + "/images/processed (15).jpeg"} alt="Gallery Item" />
                </div>
            </div>
            <div className="gallery-text">
                <h2>View Gallery</h2>
                {/* Add more text or elements as needed */}
            </div>
        </div>
      );
}

export default Cards