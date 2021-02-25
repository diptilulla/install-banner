import React from 'react';
import './banner.styles.scss';

const Banner = ({ heading, description, install_button, bgcolor, textcolor }) => (
    <div className='main'>
    <div className='frame'>
        <div className='install-banner' style={{ backgroundColor: bgcolor, color: textcolor}}>
        
            <h1>{heading}</h1>
            <p className='desc'>{description}</p>
            <button className='custom-button'> {install_button} </button>
            </div>
        </div>
    </div>
);

export default Banner;