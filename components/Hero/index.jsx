"use client";

import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import Hero from "@/public/AboutHero.jpg";
import Hero2 from "@/public/DefaultAbout.jpg";

import {motion, useScroll, useTransform} from "motion/react";

import {client} from "@/sanity/lib/client";

const ABOUT_QUERY = `*[_type == "aboutPage"] {_id, heroImage { asset -> { _id, url } }}`;
const options = { next: { revalidate: 30 } };

const Index = () => {
    //Parallax
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-50%", "100%"]);

    //data fetching
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
        <>
            <motion.div className="heroContainer2-about" style={{y: backgroundY}}>
                <Image
                    src={data[0]?.heroImage?.asset?.url || Hero2}
                    alt="Hero"
                    id="HeroImg"
                    fill
                    objectFit="cover"
                />
                {/*<div className="rectangular-frame-about" >*/}
                {/*</div>*/}
            </motion.div>
            <div className="heroContainer2Sm-about">
                <Image
                    src={Hero2}
                    alt="Hero"
                    width="100%"
                    id="HeroImg"
                    className="HeroImg-aboutSm"
                />

            </div>
        </>
    );
};

export default Index;