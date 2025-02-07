"use client";

import React from 'react';
import Image from "next/image";
import Hero2 from '@/public/Hero2.jpg'
import {Button} from "@mui/material";

import WowParallax from "@/components/WowParallax";

import styles from "./styles.module.css";

const Index = () => {
    return (
        <div className={styles.wowContainer}>
            <div className={styles.heroContainer} >
               <WowParallax />
            </div>
            <div className={styles.wowTextContainer}>
                <div className={styles.textCont}>
                    <h1 className={styles.wowTextTitle}>Leading The Industry</h1>
                    <p className={styles.wowBodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor
                        fermentum. Nulla aliquet mi vel nisi semper tempus. </p>
                    <Button className={styles.wowButton} href="/about">About</Button>
                 </div>

            </div>
            <div className={styles.wowTextContainerSm}>
                <h1 className={styles.wowTextTitleSm}>Leading The Industry</h1>
                <p className={styles.wowTextPSm}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor
                    fermentum. Nulla aliquet mi vel nisi semper tempus. </p>
                <Button className={styles.wowButtonSm} href="/about">About</Button>
                <div className={styles.heroContainerSm} >
                    <WowParallax />
                </div>
            </div>
        </div>
        );
};

export default Index;