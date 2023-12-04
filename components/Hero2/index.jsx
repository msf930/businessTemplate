"use client";

import React, {useLayoutEffect, useRef, useState} from 'react';
import Image from 'next/image'
import Hero from '@/public/Hero.jpg'
import HeroSm from '@/public/HeroSm.jpg'

const Index = () => {


    return (
            <div>
                <div className="heroContainer2">
                    <Image
                        src={Hero}
                        alt="Hero"
                        width="100%"
                        id="HeroImg"
                        className="HeroImg"
                        data-scroll data-scroll-speed="-1"
                    />
                    <h1 className="heroText">National <br/> Construction</h1>
                    <div className="rectangular-frame" >
                    </div>
                    <div className="rectangle1">
                    </div>
                </div>
                <div className="heroContainer2Sm">
                    <div className="titleContainerSm">
                        <Image
                            src={HeroSm}
                            alt="Hero"
                            width="100%"
                            id="HeroImg"
                            className="HeroImgSm"
                        />
                        <h1 className="heroTextSm">National <br/> Construction</h1>
                    </div>

                </div>
            </div>



    );
};

export default Index;