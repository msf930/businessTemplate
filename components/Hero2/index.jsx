"use client";

import { motion, useScroll, useTransform } from "motion/react";
import React, {useEffect, useRef, useState} from "react";

import styles from "./styles.module.css";
import Image from "next/image";

import {Button} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import heroHome from "@/public/HomeHeroNew.jpg";

import {client} from "@/sanity/lib/client";

const IMAGE_QUERY = `*[_type == "homePage"] {_id, heroImage { asset -> { _id, url} } }`;
const BLUR_QUERY = `*[_type == "homePage"] {_id, heroImage { asset -> { metadata {lqip} } } }`;
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
  const [blurImage, setBlurImage] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blurIsLoaded, setBlurIsLoaded] = useState(false);

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
          {/*<div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-30"></div>*/}
          {/*{blurImage[0]?.heroImage?.asset?.metadata?.blurHash &&*/}
          {/*  <Blurhash hash={blurImage[0]?.heroImage?.asset?.metadata?.blurHash} width={100} height={100}  />*/}
          {/*}*/}

          {blurImage[0]?.heroImage?.asset?.metadata?.lqip &&
              <Image
                  src={data[0]?.heroImage?.asset?.url ? data[0]?.heroImage?.asset?.url : blurImage[0]?.heroImage?.asset?.metadata?.lqip}
                  alt="Hero Image"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={blurImage[0]?.heroImage?.asset?.metadata?.lqip}
                  fill
              />
          }




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

          <motion.h1
              initial={{x: -100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ease: "easeInOut", duration: 0.8}}
          >
            Rocky Mountain
            <br />
            Remodels
          </motion.h1>
          <motion.div
              className={styles.buttonCont}
              initial={{x: 100, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{ease: "easeInOut", duration: 0.8}}
          >
            <ThemeProvider theme={theme}>
            <Button variant="outlined" className={styles.wowButton2} href={`tel:13031112222`}>303-111-2222</Button>
            <Button variant="outlined" className={styles.wowButton2} href="/about">About</Button>
            </ThemeProvider>
            </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className={styles.parallaxSm}>
        <motion.div
            // className="absolute inset-0 z-10"
            className={styles.parallaxSm}
            style={{
              y: smBackgroundYScroll,
            }}
        >
          <Image src={heroHome} alt="House with lawn" objectFit="cover" fill />
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
                  variant="outlined"
                  color="primary"
                  className={styles.wowButton2}
                  href="/about">303-111-2222
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
