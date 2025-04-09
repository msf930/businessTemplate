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
        <div className="contactContainer">
            <div className="contactLeft">
                    <h1 className="leftTitle">Contact Us</h1>
                    <p className="leftText">Get in touch with us—fill out the form, and we'll respond as soon as possible!
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
                            <label htmlFor="fname">Type your message here...</label>
                            <textarea className="contactTextArea"  id="textArea" name="textArea" ></textarea>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <ThemeProvider theme={theme}>
                                <Button className="inputBtn">Submit</Button>
                            </ThemeProvider>
                        </div>
                    </div>

            </div>
        </div>
    );
};

export default Index;