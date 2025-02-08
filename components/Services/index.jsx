import React from 'react';
import Image from "next/image";
import {Button} from "@mui/material";
import Services1 from "@/public/kitchenServ2.jpg"
import Services2 from "@/public/bathServ.jpg"
import Services3 from "@/public/bedroomServ.jpg"
import Link from "next/link";

import styles from "./styles.module.css";

const Index = () => {
    return (
        <div className="flex flex-col mt-24 bg-gray-100">
            <div className={styles.serviceTitle}>
                <h1>Our Services Include</h1>
            </div>
            <div className={styles.serviceContainer}>
                <Link href="services/Preconstruction" className={styles.serviceItemContainer}>
                    <div className={styles.serviceItemText}>Kitchen</div>
                    <div className={styles.serviceItemTextLearn}>Learn More</div>
                    <Image className={styles.serviceItemImg} src={Services1} alt="img"  placeholder="blur" fill objectFit="cover" />
                </Link>
                <Link href="services/Construction Management" className={styles.serviceItemContainer}>
                    <h1 className={styles.serviceItemText}>Bath</h1>
                    <div className={styles.serviceItemTextLearn}>Learn More</div>
                    <Image className={styles.serviceItemImg} src={Services2} alt="img"  placeholder="blur" fill objectFit="cover" />
                </Link>
                <Link href="services/Project Management" className={styles.serviceItemContainer}>
                    <h1 className={styles.serviceItemText}>Bed</h1>
                    <div className={styles.serviceItemTextLearn}>Learn More</div>
                    <Image className={styles.serviceItemImg} src={Services3} alt="img"  placeholder="blur" fill objectFit="cover" />
                </Link>
            </div>
            <div className={styles.serviceContainerSm}>
                <div  className={styles.serviceItemContainer}>
                    <Link href="services/Preconstruction" className={styles.serviceItemText}>Kitchen</Link>
                    <Image className={styles.serviceItemImg} src={Services1} alt="img" fill objectFit="cover" placeholder="blur" />
                </div>
                <div  className={styles.serviceItemContainer}>
                    <Link href="services/Construction Management"className={styles.serviceItemText}>Bath</Link>
                    <Image className={styles.serviceItemImg} src={Services2} alt="img" width="100%" placeholder="blur" />
                </div>
                <div  className={styles.serviceItemContainer}>
                    <Link href="services/Project Management" className={styles.serviceItemText}>Bed</Link>
                    <Image className={styles.serviceItemImg} src={Services3} alt="img" width="100%" placeholder="blur" />
                </div>
            </div>
            <div className="mt-24 mb-24 text-center">
                <Button href="/services" className={styles.serviceButton}>See All Services</Button>
            </div>
        </div>
    );
};

export default Index;