"use client";

import React, {useEffect, useRef, useState} from 'react';
import {Button} from "@mui/material";
import {client} from "@/sanity/lib/client";
import parsePhoneNumber from "libphonenumber-js";
import {CgFacebook, CgInstagram} from "react-icons/cg";

import { createTheme, ThemeProvider } from '@mui/material/styles';

import HCaptcha from '@hcaptcha/react-hcaptcha';


const CONTACT_QUERY = `*[_type == "contactSettings"] {_id, phoneNumber, email, address { street, street2, city, state, zipCode }, instagram {isActive, instagramLink}, facebook {isActive, facebookLink}, }`;
const options = { next: { revalidate: 30 } };
const Index = () => {
    const [contactData, setContactData] = useState([]);
    const [contactIsLoaded, setContactIsLoaded] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState(["", ""]);
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

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

    const onSubmit = async (e) => {
        setSubmitted(true);
        setResult(["Please Wait", "Sending...."]);
        const form = e.target;
        const formData = new FormData(form);
        formData.append("access_key", `${process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}`);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data.success) {
            setResult(["Thank You!", "Form Submitted Successfully"]);
        } else {
            console.log("Error", data);
            setResult(["Error", `${data.message}`]);
        }

    };

    if (submitted) {
        return (
            <div className="contact2Container">
                <div className="contact2Left">
                    <div className="contact2LeftCont">
                    <h1 className="left2Title">Contact Us</h1>
                    <p className="left2Text">Get in touch with us—fill out the form, and we'll respond as soon as possible!
                    </p>
                    {contactData[0] &&
                        <div className="text-left flex flex-col">
                            {contactData[0]?.address?.street && contactData[0]?.address?.city && contactData[0]?.address?.state && contactData[0]?.address?.zipCode &&
                                <p className="left2Text">{contactData[0]?.address?.street}, {contactData[0]?.address?.street2} {contactData[0]?.address?.city}, {contactData[0]?.address?.state}   {contactData[0]?.address?.zipCode}</p>
                            }
                            {contactData[0]?.email &&
                                <a className="left2Text" href={`mailto:${contactData[0]?.email}`}>{contactData[0]?.email}</a>
                            }
                            {contactData[0]?.phoneNumber &&
                                <a className="left2Text" href={phoneNumber.getURI()}>{phoneNumber.formatNational()}</a>
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
                    <div className="contactSubmited">
                        <div className="w-[90%] justify-center items-center py-3 text-black text-center">{result[0]}</div>
                        <div className="w-[90%] justify-center items-center py-3 text-black text-center">{result[1]}</div>
                        <div className="w-[90%] justify-center items-center py-3 text-black text-center">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={() => setSubmitted(false)} className="inputBtn">Reset</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
            <div className="contact2Container">
                <div className="contact2Left">
                    <div className="contact2LeftCont">
                        <h1 className="left2Title">Contact Us</h1>
                        <p className="left2Text">Get in touch with us—fill out the form, and we'll respond as soon as possible!
                        </p>
                        {contactData[0] &&
                            <div className="text-left flex flex-col">
                                {contactData[0]?.address?.street && contactData[0]?.address?.city && contactData[0]?.address?.state && contactData[0]?.address?.zipCode &&
                                    <p className="leftText">{contactData[0]?.address?.street}, {contactData[0]?.address?.street2} {contactData[0]?.address?.city}, {contactData[0]?.address?.state}   {contactData[0]?.address?.zipCode}</p>
                                }                                  {contactData[0]?.email &&
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
                <form onSubmit={onSubmit} className="contact2Right">
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem">
                            <label htmlFor="fname">First Name *</label>
                            <input className="contact2Input" type="text" name="NameFirst" required/>
                        </div>
                        <div className="contact2InputItem">
                            <label htmlFor="fname">Last Name *</label>
                            <input className="contact2Input" type="text" name="NameLast" required/>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem">
                            <label htmlFor="fname">Email *</label>
                            <input className="contact2Input" type="email" name="Email" required/>
                        </div>
                        <div className="contact2InputItem">
                            <label htmlFor="fname">Phone *</label>
                            <input className="contact2Input" type="tel" name="Phone" required/>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <label htmlFor="fname">Address</label>
                            <input className="contact2Input" type="text" name="Address"/>
                        </div>
                    </div>

                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <label htmlFor="fname">Type your message here...</label>
                            <textarea className="contact2InputTextArea" name="Message" ></textarea>
                        </div>
                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <div className="captcha">
                                <HCaptcha
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                                    // onLoad={onLoad}
                                    onVerify={setToken}
                                    ref={captchaRef}
                                    reCaptchaCompat={false}
                                    // size="compact"
                                    theme="dark"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="contact2InputContainer1">
                        <div className="contact2InputItem2">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" className="input2Btn" type="submit" value="Submit" >Submit</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </form>
            </div>
    );
};

export default Index;