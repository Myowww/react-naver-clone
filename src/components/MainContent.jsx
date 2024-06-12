// import React from 'react';
import './MainContent.css';

const MainContent = () => {
    return (
        <main>
            <section className="highlighted-news">
                <article>
                    <h2>HyperCLOVA X DASH</h2>
                    <p>HyperCLOVA X Introduces New Model "DASH" for Faster Performance and Lower Costs, Speeding Up NAVER's AI...</p>
                </article>
                <article>
                    <h2>Connected Work</h2>
                    <p>Connected Work, NAVER's unique work culture driven by trust and autonomy</p>
                </article>
                <article>
                    <h2>NAVER WEBTOON</h2>
                    <p>Transform your possibilities into reality with TEAM NAVER!</p>
                </article>
            </section>
            <section className="services">
                <h2>바로가기</h2>
                <div>데이터센터 각 세종</div>
                <div>GENERATIVE AI</div>
                <div>1784 TESTBED</div>
                <div>PROJECT FLOWER</div>
                <div>DIGITAL TWIN TECHNOLOGY</div>
            </section>
        </main>
    );
};

export default MainContent;
