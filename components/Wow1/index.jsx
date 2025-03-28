"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Hero2 from '@/public/Hero2.jpg'
import {Button} from "@mui/material";

import WowParallax from "@/components/WowParallax";

import styles from "./styles.module.css";

import {client} from "@/sanity/lib/client";

import { createTheme, ThemeProvider } from '@mui/material/styles';

const SECTION_QUERY = `*[_type == "homePage"] {_id, section2 { section2Image { asset -> { _id, url } }, section2Description, section2Title } }`;
const options = { next: { revalidate: 30 } };

const Index = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(SECTION_QUERY, {}, options);
            setData(result);
            setIsLoaded(true);
        };
        fetchData();

    }, []);


    const theme = createTheme({
        palette: {
            primary: {
                main: "#000000",
            }
        },
    });

    return (
        <div className={styles.wowContainer}>
            <div className={styles.heroContainer} >
                <WowParallax />

            </div>
            <div className={styles.wowTextContainer}>
                <div className={styles.textCont}>
                    <h1 className={styles.wowTextTitle}>{data[0]?.section2?.section2Title}</h1>
                    <p className={styles.wowBodyText}>{data[0]?.section2?.section2Description}</p>
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" className={styles.wowButton} href="/about">About</Button>
                    </ThemeProvider>
                 </div>

            </div>
            <div className={styles.wowTextContainerSm}>
                <h1 className={styles.wowTextTitleSm}>Leading The Industry</h1>
                <p className={styles.wowTextPSm}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor
                    fermentum. Nulla aliquet mi vel nisi semper tempus. </p>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" className={styles.wowButtonSm} href="/about">About</Button>
                </ThemeProvider>
                <div className={styles.heroContainerSm} >
                    <WowParallax />
                </div>
            </div>
        </div>
        );
};

export default Index;