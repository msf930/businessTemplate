import React, {useEffect, useState} from 'react';
import Hero from "@/public/Hero.jpg";
import Image from "next/image";
import Grid1 from '@/public/Grid1.jpg'
import Grid2 from '@/public/Grid2.jpg'
import Grid3 from '@/public/Grid3.jpg'
import Grid4 from '@/public/Grid4.jpg'
import {client} from "@/sanity/lib/client";


const ABOUT_QUERY = `*[_type == "aboutPage"] {_id, aboutPageGrid[]{title, description, image { asset -> { _id, url } } } }`;
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
            {data &&
                <div className="GridContainer">
                        <div className="GridCol" >
                            {data[0]?.aboutPageGrid?.map((item, index) => (
                                <div className="GridRows" key={index}>
                                    <div className="GridTextItem">
                                        <h1 className="GridItemTextTitle">{item.title}</h1>
                                        <p className="GridItemTextP">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="GridItemImageCont">
                                        <Image
                                            src={item.image.asset.url}
                                            alt="Construction"
                                            fill
                                            objectFit="cover"

                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            }
            <div className="GridContainerSm">
                <div className="GridRows">
                    <div className="GridCol">
                        <div>
                            <Image
                                src={Grid1}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Environmental, Social and Governance</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>

                        <div>
                            <Image
                                src={Grid3}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Lean Construction</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>

                    </div>
                    <div className="GridCol">

                        <div>
                            <Image
                                src={Grid2}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Innovation</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Grid4}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Safety and Wellness</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;