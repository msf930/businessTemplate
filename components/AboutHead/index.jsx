"use client";

import React, {useEffect, useState} from 'react';

import {client} from "@/sanity/lib/client";
import {RichTextComponents} from "@/components/RichTextComponents";
import {PortableText} from "next-sanity";

const ABOUT_QUERY = `*[_type == "aboutPage"] {_id, headerDescription }`;
const options = { next: { revalidate: 30 } };

const Index = () => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(ABOUT_QUERY, {}, options);
            setData(result);
        };
        fetchData();
        setIsLoaded(true);
    }, []);
        //console.log(data);

    return (
        <div className="AboutHead">
            <h1 className="text-4xl font-bold mb-10 mt-10 px-10">About Rocky Mountain Remodels</h1>
            <div className="AboutPContainer">
                {isLoaded && <PortableText value={data[0]?.headerDescription} components={RichTextComponents}/>}
            </div>
        </div>
    );
};

export default Index;