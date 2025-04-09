"use client";

import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {client} from "@/sanity/lib/client";
import parsePhoneNumber from "libphonenumber-js";
import {CgFacebook, CgInstagram} from "react-icons/cg";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const CONTACT_QUERY = `*[_type == "generalSettings"] {_id, phoneNumber, email, address { street, street2, city, state, zipCode }, instagram {isActive, instagramLink}, facebook {isActive, facebookLink}, }`;
const options = { next: { revalidate: 30 } };
const Index = () => {
    const [contactData, setContactData] = useState([]);
    const [contactIsLoaded, setContactIsLoaded] = useState(false);

    useEffect(() => {
        setContactIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(CONTACT_QUERY, {}, options);
            setContactData(result);
        };
        fetchData();
        setContactIsLoaded(true);
    }, []);

    let phoneNumber = "";
    if(contactData[0]?.phoneNumber){
        phoneNumber = parsePhoneNumber(`${contactData[0]?.phoneNumber}`, "US");
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: "#000000",
            }
        },
    });
    return (
            <div className="contact2Container">
                <div className="contact2Left">
                    <div className="contact2LeftCont">
                        <h1 className="left2Title">Contact Us</h1>
                        <p className="left2Text">Get in touch with us—fill out the form, and we'll respond as soon as possible!
                        </p>
                        {contactData[0] &&
                            <div className="text-left flex flex-col">
                                <p className="leftText">{contactData[0]?.address?.street}, {contactData[0]?.address?.street2} {contactData[0]?.address?.city}, {contactData[0]?.address?.state}   {contactData[0]?.address?.zipCode}</p>
                                {contactData[0]?.email &&
                                    <a className="leftText" href={`mailto:${contactData[0]?.email}`}>{contactData[0]?.email}</a>
                                }
                                {contactData[0]?.phoneNumber &&
                                    <a className="leftText" href={phoneNumber.getURI()}>{phoneNumber.formatNational()}</a>
                                }
                                <div className="flex flex-row gap-4">
                                    {contactData[0]?.facebook?.isActive &&
                                        <a href={`${contactData[0]?.facebook?.facebookLink}`} target="_blank">
                                            <CgFacebook/>
                                        </a>
                                    }
                                    {contactData[0]?.instagram?.isActive &&
                                        <a href={`${contactData[0]?.instagram?.instagramLink}`} target="_blank">
                                            <CgInstagram />
                                        </a>
                                    }
                                </div>
                            </div>
                        }

                    </div>
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
                            <label htmlFor="fname">Type your message here...</label>
                            <textarea className="contact2InputTextArea"  id="textArea" name="textArea" ></textarea>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <ThemeProvider theme={theme}>
                            <Button variant="contained" color="primary" className="input2Btn">Submit</Button>
                            </ThemeProvider>
                        </div>
                    </div>

                </div>
            </div>
    );
};

export default Index;