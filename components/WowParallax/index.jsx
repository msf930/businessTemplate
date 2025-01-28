import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";

import styles from "./styles.module.css";

import Image from "next/image";



export default function MultiLayerParallax() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);


    return (
        <div
            ref={ref}
            className={styles.parallax}

        >
            <motion.div
                className={styles.parallaxImgCont}
                style={{
                    //backgroundImage: `url(/homeGarden2.jpg)`,
                    // backgroundPosition: "top",
                    // backgroundSize: "contain",
                    y: backgroundY,
                }}
            >
                <div className={styles.parallaxImg}>
                    <Image src="/RMTNProj1.jpg" alt="park with trees" fill objectFit="cover"  />
                </div>
            </motion.div>


        </div>
    );
}