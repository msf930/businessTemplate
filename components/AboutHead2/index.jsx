"use client";

import React, {useEffect, useState} from 'react';
import {client} from "@/sanity/lib/client";

import Image from "next/image";

const ABOUT_QUERY = `*[_type == "aboutPage"] {_id, whoWeAre { whoWeAreText, whoWeAreTeam[]{memberTitle, name, teamMemberImage { asset -> { _id, url } } } } }`;
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


    return (
        <div className="AboutHead2">
            <h1 className="text-4xl font-bold mb-10 ">Who We Are</h1>
            <div className="aboutBioCont">
                {data[0]?.whoWeAre?.whoWeAreTeam?.length && data[0]?.whoWeAre?.whoWeAreTeam?.map((item, index) => (
                        <div className="aboutBioItem" key={index}>
                            <div className="aboutBioImage">
                                <Image src={item.teamMemberImage?.asset?.url} alt="team member" fill objectFit="cover"/>
                            </div>
                            <h2>{item.name}</h2>
                            <p>{item.memberTitle}</p>
                        </div>
                        )
                    )
                }
            </div>

            <div className="AboutPContainer">
                {data && <p className="">{data[0]?.whoWeAre?.whoWeAreText}</p>}
            </div>
        </div>
    );
};

export default Index;