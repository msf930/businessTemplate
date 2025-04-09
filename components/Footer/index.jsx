"use client";

import React, {useEffect, useState} from 'react';
import {CgFacebook, CgInstagram} from "react-icons/cg";
import {client} from "@/sanity/lib/client";

const CONTACT_QUERY = `*[_type == "generalSettings"] {_id, instagram {isActive, instagramLink}, facebook {isActive, facebookLink}, }`;
const options = { next: { revalidate: 30 } };

const Index = () => {
    const date = new Date();
    const year = date.getFullYear();

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

    return (
        <div className="footerContainer">
            <div className="footerSeg">
                <h1><a href="/studio">©</a> {year} Rocky Mountain Remodels</h1>
            </div>
            <div className="footerSeg">
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
        </div>
    );
};

export default Index;