"use client";

import React, {useEffect, useState} from 'react';

import {client} from "@/sanity/lib/client";

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
            <h1 className="text-4xl font-bold mb-10 mt-20 px-10">About Rocky Mountain Remodels</h1>
            <div className="AboutPContainer">
                { isLoaded && <p className="">{data[0]?.headerDescription}</p>}
            </div>
        </div>
    );
};

export default Index;