"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {Button} from "@mui/material";
import Services1 from "@/public/kitchenServ2.jpg"
import Services2 from "@/public/bathServ.jpg"
import Services3 from "@/public/bedroomServ.jpg"
import Link from "next/link";

import {client} from "@/sanity/lib/client";

import styles from "./styles.module.css";


const SERVICE_QUERY = `*[_type == "homePage"] {_id, services[] { serviceTitle, serviceRef {_ref}, serviceImage { asset -> { _id, url } } } }`;
const SERVICE_REF_QUERY = `*[_type == "services"]{_id, slug}`;
const options = { next: { revalidate: 30 } };

const Index = () => {
    const [data, setData] = useState([]);
    const [refData, setRefData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(SERVICE_QUERY, {}, options);
            const resultData = result[0].services;
            const refResult = await client.fetch(SERVICE_REF_QUERY, {}, options);
            const updatedData = resultData.map(item => {
                const matchingRef = refResult.find(ref => ref._id === item.serviceRef._ref);
                return {
                    ...item,
                    slug: matchingRef ? matchingRef.slug : null
                };
            });
            setData(updatedData);
            setIsLoaded(true);

        };
        fetchData();

    }, []);
    //console.log(data);


    return (
        <div className={styles.serviceMainContainer}>
            <div className={styles.serviceTitle}>
                <h1>Our Services Include</h1>
            </div>
            {isLoaded &&
                <div className={styles.serviceContainer}>
                    {data.map((item, index) => (
                        <Link key={index} href={item?.slug ? `services/${item?.slug?.current}` : "/services"} className={styles.serviceItemContainer}>

                                <h1 className={styles.serviceItemText}>{item?.serviceTitle}</h1>
                                {/*<div className={styles.serviceItemTextLearn}>Learn More</div>*/}
                                <Image className={styles.serviceItemImg} src={item?.serviceImage?.asset?.url} alt={item?.serviceTitle} fill objectFit="cover"/>

                        </Link>
                    ))}
                </div>
            }
            {isLoaded &&
                <div className={styles.serviceContainerSm}>
                    {data.map((item, index) => (
                        <div className={styles.serviceItemContainer} key={index}>
                            <Link  href={item?.slug ? `services/${item?.slug?.current}` : "/services"} className={styles.serviceItemText}>{item?.serviceTitle}</Link>
                            <Image className={styles.serviceItemImg} src={item?.serviceImage?.asset?.url} alt={item?.serviceTitle} fill objectFit="cover"/>
                        </div>
                        ))}
                </div>
            }
            <div className="mt-24 mb-24 text-center">
                <Button variant="contained" href="/services" className={styles.serviceButton}>See All Services</Button>
            </div>
        </div>
    );
};

export default Index;