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
                        <label name="oustside">Outside</label>
                        <input type="radio" />
                        <img src={InsideImage}/>
                        <label name="oustside">Inside</label>
                        <input type="radio"/>
                    </div>
                    <div className="rightDetails">
                        <select name="Date" className="TimeDate" id="dropdown">
                            <option className="dropdown" value="date1">Date</option >
                            <option className="dropdown" value="date2">01-02-2024</option >
                            <option className="dropdown" value="date3">01-03-2024</option >
                            <option className="dropdown" value="date4">01-04-2024</option >
                        </select>
                        <select name="Time" className="TimeDate" id="dropdown">
                            <option className="dropdown" value="Time1">Time</option>
                            <option className="dropdown" value="Time2">2h</option>
                            <option className="dropdown" value="Time3">3h</option>
                            <option className="dropdown" value="Time4">4h</option>
                        </select>
                        <select name="occasion" className="occasion" id="dropdown">
                            <option className="dropdown" value="occasion1">Occasion</option>
                            <option className="dropdown" value="occasion2">Birthday</option>
                            <option className="dropdown" value="occasion3">Anniversary</option>
                            <option className="dropdown" value="occasion4">Engagemant</option>
                        </select>
                        <button className="button-go">Let's go</button>
                    </div>
            </div>
            <div className="SignAndCreditcard">
            </div>
        </main>
    )
}

export default Main;