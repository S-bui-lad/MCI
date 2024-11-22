import react from 'react';
import '../styles/banner.css'
import bannerw from "../images/banner.jpg";
import React from "react";

function Banner(){
    return (
        <div className="banner-container">
            <img src={bannerw} alt="Banner" className="banner-image"/>
        </div>
    );
}

export default Banner;