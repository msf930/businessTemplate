import React, {useEffect, useState} from 'react';

import styles from "./styles.module.css";
import {client} from "@/sanity/lib/client";


const TESTIMONIAL_QUERY = `*[_type == "homePage"] {_id,  testimonialList[] { testimonial, author} }`;
const options = { next: { revalidate: 30 } };

const Index = () => {

    const [data, setData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(TESTIMONIAL_QUERY, {}, options);
            setData(result);
            setIsLoaded(true);
        };
        fetchData();

    }, []);

    return (
        <div className={styles.testContainer}>
            {isLoaded &&
                <div>
                    <div>
                        <h1 className={styles.testTitle}>Satisfied Customers</h1>
                    </div>
                    <div className={styles.testItemContainer}>
                        {data[0]?.testimonialList?.map((item, index) => (
                        <div key={index} className={styles.testItem}>
                            <div className={styles.testIconContainer}>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="-0.02 -0.005 54.82 38.305" xmlns="http://www.w3.org/2000/svg" viewBox="-0.02 -0.005 54.82 38.305" role="presentation" aria-hidden="true" aria-label="">
                                    <g>
                                        <path d="M2.1 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.4-.8-2.6-2.1-3.3-3.7C.3 16.4 0 14.5 0 12.7-.2 9.3 1.1 6 3.4 3.5 5.7 1.2 8.8-.1 12 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                                        <path d="M33.4 37.4v-.5c4.4-.9 8.5-3.1 11.6-6.5 2.8-3.3 4.5-7.4 4.7-11.7-2.6 3.1-5.5 4.6-8.7 4.6-1.9 0-3.7-.5-5.3-1.5-1.5-.9-2.6-2.2-3.3-3.8-.8-1.7-1.1-3.6-1.1-5.4-.2-3.4 1.1-6.7 3.4-9.2C37 1.2 40.1-.1 43.3 0c3.2-.1 6.3 1.3 8.3 3.7 2.1 2.5 3.2 6.1 3.2 10.8 0 2-.2 4-.6 5.9-.4 2-1.2 4-2.2 5.8-1.1 2.1-2.6 3.9-4.3 5.6-1.8 1.7-3.8 3.2-6 4.3-2.1 1.1-4.3 1.8-6.6 2.2l-1.7-.9z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p className={styles.testP}>"{item?.testimonial}"
                            </p>
                            <h1 className={styles.testName}>{item?.author}</h1>
                        </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
};

export default Index;