"use client";

import React from 'react';
import Image from "next/image";
import Hero from "@/public/AboutHero.jpg";
import Hero2 from "@/public/AboutHeroSm.jpg";

const Index = () => {
    return (
        <>
            <div className="heroContainer2-about">
                <Image
                    src={Hero}
                    alt="Hero"
                    width="100%"
                    id="HeroImg"
                    className="HeroImg-about"
                    data-scroll data-scroll-speed="-1"
                />
                {/*<div className="rectangular-frame-about" >*/}
                {/*</div>*/}
                <div className="rectangle1-about">
                </div>
            </div>
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