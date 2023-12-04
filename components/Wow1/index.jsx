"use client";

import React from 'react';
import Image from "next/image";
import Hero2 from '@/public/Hero2.jpg'
import {Button} from "@mui/material";

const Index = () => {
    return (
        <div className="wowContainer">
            <div className="heroContainer" >
                <div className="heroMaskContainer">
                    <svg className="wowMaskSvg2" >
                        <image
                            href="Hero2.jpg"
                            className="wowImg"
                            mask="url(#mask)"
                        />
                        <mask id="mask">
                            <svg className="wowMaskSvg" >
                                <rect
                                    className="wowMaskRect"
                                    fill="#fff"
                                    x="0"
                                    y="0"
                                    width="100%"
                                    height="100%"

                                >
                                </rect>
                            </svg>
                        </mask>
                    </svg>
                </div>
            </div>
            <div className="wowTextContainer">
                <h1 className="wowTextTitle">Leading The Industry</h1>
                <p className="text-xl mt-5 mx-20 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor
                    fermentum. Nulla aliquet mi vel nisi semper tempus. </p>
                <Button className="wowButton" href="/about">About</Button>
            </div>
            <div className="wowTextContainerSm">
                <h1 className="wowTextTitleSm">Leading The Industry</h1>
                <p className="wowTextPSm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor
                    fermentum. Nulla aliquet mi vel nisi semper tempus. </p>
                <Button className="wowButtonSm" href="/about">About</Button>
                <img src="/Hero2.jpg" alt="building" className="wowImgSm"/>
            </div>
        </div>
        );
};

export default Index;