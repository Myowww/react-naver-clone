// import React from 'react';
import './Footer.css';

const Footer = () => {
    const quickLinks = [
        "제휴제안을 위한",
        "미디어를 위한",
        "개발자를 위한",
        "투자자를 위한",
        "중소상공인을 위한",
        "입사지원자를 위한",
        "창작자를 위한"
    ];

    return (
        <footer>
            <div className="quick-links">
                <h2>바로가기</h2>
                <ul>
                    {quickLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="footer-bottom">
                <ul>
                    <li>네이버클라우드</li>
                    <li>스노우</li>
                    <li>네이버웍스</li>
                    <li>네이버밴드</li>
                    <li>네이버메인화면</li>
                </ul>
                <p>©NAVER CORP.</p>
            </div>
        </footer>
    );
};

export default Footer;
