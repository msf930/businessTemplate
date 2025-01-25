import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./styles.module.css";
import Image from "next/image";

import heroHome from "@/public/Hero.jpg";

export default function Index() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.7]);

  return (
    <div className={styles.container}>
      <div
        ref={ref}
        //className="w-[calc(100% - 200px)] left-[100px] h-screen overflow-hidden relative grid place-items-center"
        className={styles.parallax}
      >
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            // backgroundImage: `url(/homeHeroHouse.png)`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            y: backgroundY,
          }}
        >
          <Image src={heroHome} alt="House with lawn" objectFit="cover" fill />
        </motion.div>
        <motion.div
          className={styles.overlay}
          style={{ opacity: overlayOpacity }}
        ></motion.div>
        <div className={styles.overlayText}>
          <h1>
            National
            <br />
            Construction
          </h1>
        </div>
      </div>
      <div className={styles.parallaxSm}>
        <div className="absolute inset-0 z-10">
          <Image src={heroHome} alt="House with lawn" objectFit="cover" fill />
        </div>
        <div className={styles.overlayText}>
          <h1>
            National
            <br />
            Construction
          </h1>
        </div>
      </div>
    </div>
  );
}
