import { motion, useScroll, useTransform } from "motion/react";
import React, {useEffect, useRef, useState} from "react";

import styles from "./styles.module.css";

import Image from "next/image";
import {client} from "@/sanity/lib/client";


const SECTION_QUERY = `*[_type == "homePage"] {_id, section2 { section2Image { asset -> { _id, url } } } }`;
const options = { next: { revalidate: 30 } };

export default function MultiLayerParallax() {


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

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-60%", "-40%"]);
    const backgroundYSm = useTransform(scrollYProgress, [0, 1], ["-50%", "-60%"]);


    return (
        <div
            ref={ref}
            className={styles.parallax}
        >
            <motion.div
                className={styles.parallaxImgCont}
                style={{
                    y: backgroundY,
                }}
            >
                <div className={styles.parallaxImg}>
                    {isLoaded && <Image src={data[0]?.section2?.section2Image?.asset?.url} alt="park with trees" fill objectFit="cover"  />}

                </div>
            </motion.div>
            <motion.div
                className={styles.parallaxImgContSm}
                style={{
                    y: backgroundYSm,
                }}
            >
                <div className={styles.parallaxImg}>
                    <Image src="/RMTNProj1.jpg" alt="park with trees" fill objectFit="cover"  />
                </div>
            </motion.div>

        </div>
    );
}