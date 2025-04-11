"use client";

import React, {useEffect, useState, useRef} from 'react';
import {Button} from "@mui/material";
import {client} from "@/sanity/lib/client";
import parsePhoneNumber from "libphonenumber-js";
import {CgFacebook, CgInstagram} from "react-icons/cg";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import HCaptcha from '@hcaptcha/react-hcaptcha';


const CONTACT_QUERY = `*[_type == "generalSettings"] {_id, phoneNumber, email, address { street, street2, city, state, zipCode }, instagram {isActive, instagramLink}, facebook {isActive, facebookLink}, }`;
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
                    <div className="contactSubmited">
                        <div className="w-[90%] justify-center items-center py-3 text-white text-center">{result[0]}</div>
                        <div className="w-[90%] justify-center items-center py-3 text-white text-center">{result[1]}</div>
                        <div className="w-[90%] justify-center items-center py-3 text-white text-center">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" onClick={() => setSubmitted(false)} className="inputBtn">Reset</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    console.log(contactData[0]);
    return (
        <div className="contactContainer">
            <div className="contactLeft">
                    <h1 className="leftTitle">Contact Us</h1>
                    <p className="leftText">Get in touch with us—fill out the form, and we'll respond as soon as possible!
                    </p>
                    {contactData[0] &&
                        <div className="text-left flex flex-col">
                            {contactData[0]?.address?.street && contactData[0]?.address?.city && contactData[0]?.address?.state && contactData[0]?.address?.zipCode &&
                                <p className="leftText">{contactData[0]?.address?.street}, {contactData[0]?.address?.street2} {contactData[0]?.address?.city}, {contactData[0]?.address?.state}   {contactData[0]?.address?.zipCode}</p>
                            }
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
                <form onSubmit={onSubmit}>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem">
                            <label htmlFor="fname">First Name *</label>
                            <input className="contactInput" type="text" name="NameFirst" required/>
                        </div>
                        <div className="contactInputItem">
                            <label htmlFor="fname">Last Name *</label>
                            <input className="contactInput" type="text" name="NameLast" required/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem">
                            <label htmlFor="fname">Email *</label>
                            <input className="contactInput" type="email" name="Email" required/>
                        </div>
                        <div className="contactInputItem">
                            <label htmlFor="fname">Phone *</label>
                            <input className="contactInput" type="tel" name="Phone" required/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <label htmlFor="fname">Address</label>
                            <input className="contactInput" type="text" name="Address"/>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <label htmlFor="fname">Type your message here...</label>
                            <textarea className="contactTextArea" name="Message" ></textarea>
                        </div>
                    </div>
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
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
                    <div className="contactInputContainer1">
                        <div className="contactInputItem2">
                            <ThemeProvider theme={theme}>
                                <Button variant="contained" color="primary" type="submit" value="Submit" className="inputBtn">Submit</Button>
                            </ThemeProvider>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Index;