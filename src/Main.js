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
                        <img id="outside" src={OutsideImage}/>
                        <img id="inside" src={InsideImage}/>
                    </div>



                    <div className="rightDetails">
                        {/* <select className="TimeDate">
                            <option className="dropdown" value="date1">Date</option >
                            <option className="dropdown" value="date2">01-02-2024</option >
                            <option className="dropdown" value="date3">01-03-2024</option >
                            <option className="dropdown" value="date4">01-04-2024</option >
                        </select>
                        <select className="TimeDate">
                            <option className="dropdown" value="Time1">Time</option>
                            <option className="dropdown" value="Time2">2h</option>
                            <option className="dropdown" value="Time3">3h</option>
                            <option className="dropdown" value="Time4">4h</option>
                        </select>
                        <select className="occasion">
                            <option className="dropdown" value="occasion1">Occasion</option>
                            <option className="dropdown" value="occasion2">Birthday</option>
                            <option className="dropdown" value="occasion3">Anniversary</option>
                            <option className="dropdown" value="occasion4">Engagemant</option>
                        </select> */}
                        <div className="form-grid">
                            <div className="input-group">
                                <label htmlFor="date">Date</label>
                                <select id="date">
                                    <option value="" disabled selected>Date</option>

                                </select>
                            </div>

                            <div className="input-group">
                                <label htmlFor="time">Time</label>
                                <select id="time">
                                <option value="" disabled selected>Time</option>
                                </select>
                            </div>

                            <div className="input-group" id="dinners">
                                <label htmlFor="diners">Number of diners</label>
                                <select id="diners">
                                <option value="" disabled selected>Number of diners</option>
                                </select>
                            </div>

                            <div className="input-group" id="occasion" >
                                <label htmlFor="occasion">Occasion</label>
                                <select id="occasion">
                                <option value="" disabled selected>Occasion</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="seating-options">
                        <label>Seating options:</label>
                        <div class="options">
                            <div class="option">
                                <input type="radio" id="standard" name="seating" value="standard"/>
                                <label for="standard">Standard</label>
                            </div>
                            <div class="option">
                                <input type="radio" id="outside" name="seating" value="outside"/>
                                <label for="outside">Outside</label>
                            </div>
                        </div>
                    </div>
                    <button className="button-go">Let's go</button>
            </div>
            <div className="SignAndCreditcard">
                <div className="PersonnalInformation">
                    <h1>Sign in to collect point</h1>
                    <input className="Input-info" placeholder="First name" type="search"></input>
                    <p>First name is required</p>
                    <input className="Input-info" placeholder="Last name" type="search"></input>
                    <p>Last name is required</p>
                    <input className="Input-info" placeholder="Phone number" type="search"></input>
                    <p>Phone number is required</p>
                    <input className="Input-info" placeholder="Email" type="search"></input>
                    <p>Email is required</p>
                    <input className="Input-info" placeholder="Password" type="search"></input>
                    <p>6-character password is all you need</p>
                    <input className="Input-info-text" placeholder="Add a special request optional" type="text"></input>
                </div>
                <div className="CreditCardDetails">
                    <h1>Credit card details</h1>
                    <input className="Input-info" placeholder="First and last name" type="search"></input>
                    <p>Full name is required</p>
                    <input className="Input-info" placeholder="Card number" type="search"></input>
                    <p>Card number is required</p>
                    <div className="CreditCard">
                    <input className="Input-info-year" placeholder="MM/YYYY" type="search"></input>
                    <input className="Input-info-cvv" placeholder="CVV" type="search"></input>
                    <p>Full name is required</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;