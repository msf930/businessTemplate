import React, {useEffect, useState} from 'react';
import {client} from "@/sanity/lib/client";

const ABOUT_QUERY = `*[_type == "aboutPage"] {_id, bottomText, bottomTextBody}`;
const options = { next: { revalidate: 30 } };

const Index = () => {

    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(ABOUT_QUERY, {}, options);
            setData(result);
        };
        fetchData();
        setIsLoaded(true);
    }, []);

    return (
        <>
            { data &&
                <div className="AboutHead3">
                    <h1 className="text-4xl font-bold mb-5 ">{data[0]?.bottomText}</h1>
                    <div className="About3PContainer">
                        <div></div>
                       <p>{data[0]?.bottomTextBody}</p>
                        <div></div>
                    </div>
                </div>
            }
        </>
    );
};

export default Index;