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
                <img className="heroImg" src={HeroImage}/>
            </div>
            <div className="TableInfo">
            <h1>Find a table for any occasion</h1>
                    <div className="leftDetails" >
                        <img src={OutsideImage}/>
                        <img src={InsideImage}/>
                    </div>
                    <div className="rightDetails">
                        <select name="Date" id="date">
                            <option value="01-01-2024">01-01-2024</option>
                            <option value="01-02-2024">01-02-2024</option>
                            <option value="01-03-2024">01-03-2024</option>
                            <option value="01-04-2024">01-04-2024</option>
                        </select>
                    </div>
            </div>
            <div className="SignAndCreditcard">
            </div>
        </main>
    )
}

export default Main;