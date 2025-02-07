import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./styles.module.css";
import Image from "next/image";

import {Button} from "@mui/material";

import heroHome from "@/public/HomeHeroNew.jpg";

export default function Index() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const refSm = useRef(null);
  const { scrollYProgressSm } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0,0.5, 1], ["0%","50%", "100%"]);
  const backgroundYScroll = useTransform(scrollYProgress, [0,1], ["0%", "-100%"]);
  const smBackgroundYScroll = useTransform(scrollYProgress, [0,1], ["0%", "20%"]);

  const overlayOpacity = useTransform(scrollYProgress, [0,0.5, 1], [0,0, 1]);
  const overlayOpacityText = useTransform(scrollYProgress, [0,0.6, 1], [1,0,0]);

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
          className="absolute inset-0 z-10 mt-[100px]"

        >
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-20"></div>
          <Image src={heroHome} alt="House with lawn" objectFit="cover" fill />
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
            <Button variant="outlined" className={styles.wowButton} href="/about">303-111-2222</Button>
            <Button variant="outlined" className={styles.wowButton} href="/about">About</Button>
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
            <Button variant="outlined" className={styles.wowButton} href="/about">303-111-2222</Button>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
