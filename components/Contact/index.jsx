import React from 'react';
import {Button} from "@mui/material";

const Index = () => {

    return (
        <div className="contactContainer">
            <div className="contactLeft">


                    <h1 className="leftTitle">Contact Us</h1>
                    <p className="leftText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nunc sit amet leo vel felis commodo commodo et eget lectus.
                    </p>
                    <p className="leftText">  4246 Hanover Street Spokane, WA   99203</p>
                    <p className="leftText">info@mysite.com</p>
                    <p className="leftText">123-456-7891</p>


            </div>
            <div className="contactRight">

                    <div className="contactInputContainer1">
                        <div className="contactInputItem">
                            <label htmlFor="fname">First Name *</label>
                            <input className="contactInput" type="text" id="fname" name="fname" required/>
                        </div>
                        <div className="contactInputItem">
                            <label htmlFor="fname">Last Name *</label>
                            <input className="contactInput" type="text" id="fname" name="fname" required/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem">
                            <label htmlFor="fname">Email *</label>
                            <input className="contactInput" type="text" id="fname" name="fname" required/>
                        </div>
                        <div className="contactInputItem">
                            <label htmlFor="fname">Phone *</label>
                            <input className="contactInput" type="text" id="fname" name="fname" required/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <label htmlFor="fname">Address</label>
                            <input className="contactInput" type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <label htmlFor="fname">Subject</label>
                            <input className="contactInput" type="text" id="fname" name="fname"/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <label htmlFor="fname">Type your message here...</label>
                            <textarea className="contactTextArea"  id="textArea" name="textArea" > </textarea>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <Button className="inputBtn">Submit</Button>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Index;