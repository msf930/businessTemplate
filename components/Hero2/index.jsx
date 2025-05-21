"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, {useEffect, useRef, useState} from "react";

import styles from "./styles.module.css";
import Image from "next/image";

import {Button} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import heroHome from "@/public/HomeHeroNew.jpg";

import {client} from "@/sanity/lib/client";

import parsePhoneNumber from 'libphonenumber-js'

const IMAGE_QUERY = `*[_type == "homePage"] {_id, heroImage { asset -> { _id, url} } }`;
const BLUR_QUERY = `*[_type == "homePage"] {_id, heroImage { asset -> { metadata {lqip} } } }`;
const PHONE_QUERY = `*[_type == "contactSettings"] {_id, phoneNumber }`;
const options = { next: { revalidate: 30 } };


export default function Index() {


  const theme = createTheme({
    border: '1px solid',
    palette: {
      primary: {
        main: '#FFFFFF'
      },
    },
  });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });



  const backgroundY = useTransform(scrollYProgress, [0,0.5, 1], ["0%","50%", "100%"]);
  const backgroundYScroll = useTransform(scrollYProgress, [0,1], ["0%", "-100%"]);
  const smBackgroundYScroll = useTransform(scrollYProgress, [0,1], ["0%", "20%"]);

  const overlayOpacity = useTransform(scrollYProgress, [0,0.5, 1], [0,0, 1]);
  const overlayOpacityText = useTransform(scrollYProgress, [0,0.6, 1], [1,0,0]);


  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurImage, setBlurImage] = useState([]);
  const [blurIsLoaded, setBlurIsLoaded] = useState(false);
  const [phoneData, setPhoneData] = useState([]);
  const [phoneIsLoaded, setPhoneIsLoaded] = useState(false);

  useEffect(() => {
    setBlurIsLoaded(false);
    const fetchData = async () => {
      const result = await client.fetch(BLUR_QUERY, {}, options);
      setBlurImage(result);
    };
    fetchData();
    setBlurIsLoaded(true);
  }, []);


  useEffect(() => {
    setIsLoaded(false);
    const fetchData = async () => {
      const result = await client.fetch(IMAGE_QUERY, {}, options);
      setData(result);

    };
    fetchData();
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    setPhoneIsLoaded(false);
    const fetchData = async () => {
      const result = await client.fetch(PHONE_QUERY, {}, options);
      setPhoneData(result);
    };
    fetchData();
    setPhoneIsLoaded(true);
  }, []);

  let phoneNumber = "";
  if(phoneData[0]?.phoneNumber){
    phoneNumber = parsePhoneNumber(`${phoneData[0]?.phoneNumber}`, "US");
  }

  return (
    <motion.div
        className={styles.container}
        ref={ref}
    >
      <motion.div
       className={styles.parallax}
        style={{
          y: backgroundY,
        }}
      >
        <motion.div
          className="absolute inset-0 z-10 mt-[100px] brightness-[0.7]"

        >
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-30"></div>
          {/*{blurImage[0]?.heroImage?.asset?.metadata?.blurHash &&*/}
          {/*  <Blurhash hash={blurImage[0]?.heroImage?.asset?.metadata?.blurHash} width={100} height={100}  />*/}
          {/*}*/}

          {/*{data[0]?.heroImage?.asset?.url &&*/}
          {/*    <Image*/}
          {/*        src={data[0]?.heroImage?.asset?.url}*/}
          {/*        alt="Hero Image"*/}
          {/*        objectFit="cover"*/}
          {/*        // placeholder="blur"*/}
          {/*        // blurDataURL={blurImage[0]?.heroImage?.asset?.metadata?.lqip}*/}
          {/*        fill*/}
          {/*    />*/}
          {/*}*/}

          {blurImage[0]?.heroImage?.asset?.metadata?.lqip &&
            <Image
              src={data[0]?.heroImage?.asset?.url ? data[0]?.heroImage?.asset?.url : blurImage[0]?.heroImage?.asset?.metadata?.lqip}
              alt="Hero Image"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurImage[0]?.heroImage?.asset?.metadata?.lqip}
              fill
          />}






        </motion.div>
        <motion.div
          className={styles.overlay}
          style={{ opacity: overlayOpacity }}
        ></motion.div>
        <motion.div className={styles.overlayText}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{ease: "easeInOut", duration: 0.4}}
                    style={{
                      y: backgroundYScroll,
                      opacity: overlayOpacityText,
                    }}
        >

          <motion.div
              initial={{x: -40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ease: "easeInOut", duration: 0.8}}
          >
            <h1>
              Rocky Mountain
              <br />
              Remodels
            </h1>
            <h2>Rocky Mountain Remodels has over 35 combined years of experience remodeling residential, commercial, and retail spaces</h2>
          </motion.div>
          <motion.div
              className={styles.buttonCont}
              initial={{x: 40, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ease: "easeInOut", duration: 0.8}}
          >
              <ThemeProvider theme={theme}>
                <Button variant="contained" color="primary"  href="/contact">Get In Touch</Button>
                {/*<Button variant="outlined" className={styles.wowButton2} href="/about">About</Button>*/}
              </ThemeProvider>
            </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.parallaxSm}>
        <motion.div
            // className="absolute inset-0 z-10"
            className="absolute inset-0 z-10 brightness-[0.7]"
            style={{
              y: smBackgroundYScroll,
            }}
        >
          {data[0]?.heroImage?.asset?.url &&
              <Image
                  src={data[0]?.heroImage?.asset?.url}
                  alt="Hero Image"
                  objectFit="cover"
                  // placeholder="blur"
                  // blurDataURL={blurImage[0]?.heroImage?.asset?.metadata?.lqip}
                  fill
              />
          }
        </motion.div>
        <div className={styles.overlayText}>
          <h1>
            Rocky Mountain
            <br />
            Remodels
          </h1>
          <div className={styles.buttonCont}>

              <ThemeProvider theme={theme}>
                <Button
                    variant="contained"
                    color="primary"
                    // className={styles.wowButton2}
                    href="/contact">
                  Get In Touch
                </Button>
              </ThemeProvider>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
