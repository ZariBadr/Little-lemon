import React from "react";
import HeroImage from './images/tableimg2.jpeg';
import OutsideImage from './images/tableimg1.jpeg';
import InsideImage from './images/tableimg.jpeg';
import "./main.css";

function Main() {
    return (
        <main>
            <div className="hero">
                <p>By sharing your name and contact details, you're not just reserving a seat, you're embarking on a customized dining journey. We prioritize both the personalization of your experience and the privacy of your information. With us, every meal becomes a curated adventure, tailored just for you and your guests.</p>
                <img src={HeroImage}/>
            </div>
            <div className="TableDetails">
                <h1>Find a table for any occasion</h1>
                <div className="Images">
                    <img src={OutsideImage}/>
                    <img src={InsideImage}/>
                </div>
            </div>
            <div className="signAndCreditcard">

            </div>
        </main>
    )
}

export default Main;