import React from "react";
import "../style/Header.css";
import TrendingSlider from './TrendingSlider'
import { GoSearch } from "react-icons/go";

const Header = () => {
    return (
        

        <div className="hero-container">
            <nav className="hero-nav">
                <div className="logo"><img width={'44px'} height={'20px'} src="images/seetgeak.png" alt="" /></div>
                <ul className="nav-links">
                    <li>Sports</li>
                    <li>Music</li>
                    <li>Shows</li>
                    <li>Cities</li>
                </ul>
                <div className="nav-right">
                    <span> <img src="images/usaflag.png" alt="" width={'44px'} height={'20px'} /></span> <span>  USD</span>
                    <a href="#sell">Sell</a>
                    <a href="#support">Support</a>
                    <button className="sign-in-btn">Sign In</button>
                </div>
            </nav>
            <div className="hero-content">
                <h1>Let there be live</h1>
                <p>Your next best-night-ever is waiting</p>
                <div className="search-bar">
                    <button type="submit">
                        <GoSearch />
                    </button>
                    <input type="text" placeholder="What do you want to see live?" />
                    

                </div>
        
   
        </div>
            <TrendingSlider/>
        </div>
    );
};

export default Header;
