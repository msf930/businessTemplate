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
                    {data[0]?.section2?.section2Title &&
                        <h1 className={styles.wowTextTitle}>{data[0]?.section2?.section2Title}</h1>
                    }
                    {data[0]?.section2?.section2Description &&
                        <p className={styles.wowBodyText}>{data[0]?.section2?.section2Description}</p>
                    }
                    <ThemeProvider theme={theme}>
                        <Button variant="contained" color="primary" className={styles.wowButton} href="/about">About</Button>
                    </ThemeProvider>
                 </div>

            </div>
            <div className={styles.wowTextContainerSm}>
                {data[0]?.section2?.section2Title &&
                    <h1 className={styles.wowTextTitleSm}>{data[0]?.section2?.section2Title}</h1>
                }
                {data[0]?.section2?.section2Description &&
                    <p className={styles.wowTextPSm}>{data[0]?.section2?.section2Description}</p>
                }
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