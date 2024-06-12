// import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-top">
                <a href="#skip-navigation" className="skip-navigation">Skip to navigation</a>
                <nav>
                    <ul>
                        <li>NAVER</li>
                        <li>SERVICE</li>
                        <li>TECH</li>
                        <li>ESG</li>
                        <li>IR</li>
                        <li>MEDIA</li>
                        <li>STORY</li>
                        <li>CAREERS</li>
                    </ul>
                </nav>
            </div>
            <div className="header-main">
                <h1>NAVER</h1>
                <p>대한민국</p>
                <p>23:28:37</p>
            </div>
        </header>
    );
};

export default Header;
