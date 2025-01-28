"use client"

import { useEffect } from 'react';

import { motion, AnimatePresence } from "motion/react";

import Hero from "@/components/Hero";
import AboutHead from "@/components/AboutHead";
import AboutHead2 from "@/components/AboutHead2";
import AboutGrid from "@/components/AboutGrid";
import AboutHead3 from "@/components/AboutHead3";
import AboutAction from "@/components/AboutAction";
import NavBar from "@/components/NavBar";

const Page = () => {

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{ease: "easeIn", duration: 1.0}}
                exit={{opacity: 0, transition: {duration: 0.8}}}

            >
                <NavBar/>
                <AboutHead/>
                <Hero/>
                <AboutHead2 />
                <AboutGrid />
                <AboutHead3 />
                <AboutAction/>
            </motion.div>
        </AnimatePresence>
    );
};

export default Page;