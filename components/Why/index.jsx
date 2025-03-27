import React, {useEffect, useState} from 'react';

import styles from './styles.module.css';
import {client} from "@/sanity/lib/client";

const WHY_QUERY = `*[_type == "homePage"] {_id,  whyUsItems[] { description, title, key } }`;
const options = { next: { revalidate: 30 } };

const Index = () => {

    const [data, setData] = useState([]);

    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(WHY_QUERY, {}, options);
            setData(result);
            setIsLoaded(true);
        };
        fetchData();

    }, []);

    return (
        <div className={styles.whyContainer}>
            <div>
                <h1 className={styles.whyTitle}>Why Choose Us</h1>
            </div>
            <div className={styles.whyItemContainer}>
                {data[0]?.whyUsItems?.map((item, index) => (
                    <div key={index} className={styles.whyItem}>
                        <h1 className={styles.whyItemTitle}>{item.title}</h1>
                        <p className={styles.whyItemBody}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Index;