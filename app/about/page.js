"use client"

import { useEffect } from 'react';
import Hero from "@/components/Hero";
import AboutHead from "@/components/AboutHead";
import AboutHead2 from "@/components/AboutHead2";
import AboutGrid from "@/components/AboutGrid";
import AboutHead3 from "@/components/AboutHead3";
import AboutAction from "@/components/AboutAction";

const Page = () => {
    useEffect( () => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    return (
        <div>
            <AboutHead/>
            <Hero/>
            <AboutHead2 />
            <AboutGrid />
            <AboutHead3 />
            <AboutAction/>
        </div>
    );
};

export default Page;