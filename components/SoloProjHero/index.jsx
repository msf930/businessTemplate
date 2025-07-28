"use client";

import {motion, useScroll, useTransform} from "motion/react";
import {useRef} from "react";

import Image from "next/image";

import styles from "./styles.module.css";

const SoloProjHero = ({ image, altText }) => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  return (
      <motion.div className={styles.ServDynImgContainer} ref={ref}>
            {/*<h1 className={styles.ServeDynHeroText}>{title}</h1>*/}
          <motion.div className={styles.ServDynImg}>
              <motion.div className={styles.ServDynImgParallax} style={{y: backgroundY}}>
                  <Image loading="eager" alt={altText} src={image}  objectFit="cover" fill />
              </motion.div>
          </motion.div>
      </motion.div>
  );
}

export default SoloProjHero;