import React from 'react';
import {Button} from "@mui/material";

const Index = () => {
    return (
        <div className="contact2Container">
            <div className="contact2Left">
                <div></div>
                <div>
                    <h1 className="left2Title">Contact Us</h1>
                    <p className="left2Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nunc sit amet leo vel felis commodo commodo et eget lectus.
                    </p>
                    <p className="left2Text">  4246 Hanover Street Spokane, WA   99203</p>
                    <p className="left2Text">info@mysite.com</p>
                    <p className="left2Text">123-456-7891</p>
                </div>
                <div></div>
            </div>
            <div className="contact2Right">

                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem">
                            <label htmlFor="fname">First Name *</label>
                            <input className="contact2Input" type="text" id="fname" name="fname" required/>
                        </div>
                        <div className="contact2InputItem">
                            <label htmlFor="fname">Last Name *</label>
                            <input className="contact2Input" type="text" id="fname" name="fname" required/>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem">
                            <label htmlFor="fname">Email *</label>
                            <input className="contact2Input" type="text" id="fname" name="fname" required/>
                        </div>
                        <div className="contact2InputItem">
                            <label htmlFor="fname">Phone *</label>
                            <input className="contact2Input" type="text" id="fname" name="fname" required/>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <label htmlFor="fname">Address</label>
                            <input className="contact2Input" type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <label htmlFor="fname">Subject</label>
                            <input className="contact2Input" type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <label htmlFor="fname">Type your message here... </label>
                            <textarea className="contact2InputTextArea"  id="fname" name="fname"></textarea>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <Button className="input2Btn">Submit</Button>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Index;