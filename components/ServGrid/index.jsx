import React from 'react';
import Image from "next/image";
import Link from "next/link";

import { client } from "@/sanity/lib/client";
import RippleButton from "@/components/RippleButton";

const SERVICE_QUERY = `*[_type == "services"] {_id, slug, title, description, mainImage { asset -> { _id, url } } }`;
const SERVICE_ORDER_QUERY = `*[_type == "servicesOrder"]{ services }`;

const options = { next: { revalidate: 30 } };

const Index = async () => {

    const posts = await client.fetch(SERVICE_QUERY, {}, options);
    const orderObj = await client.fetch(SERVICE_ORDER_QUERY, {}, options);

    const order = orderObj[0].services;

    const orderedPosts = [];

    order.forEach(orderItem => {
        const matchedPost = posts.find(post => post._id === orderItem._ref);
        if (matchedPost) {
            orderedPosts.push(matchedPost);
        }
    });

    // console.log(orderedPosts);
    return (
        <div>
        <div className="ServGridContainer">
            <div className="ServGridRows">
                <div className="ServGridCol">
                {orderedPosts.map((post, index) => (
                    <div key={index} className="ServGridItem">
                        <Link className="ServGridLinkContainer" href={`services/${post.slug.current}`}>
                            <div className="ServImgItemCont">
                                <RippleButton />
                                <h1 className="ServImgText">Learn More</h1>
                                <Image
                                    src={post.mainImage.asset.url}
                                    alt={post.title}
                                    objectFit="cover"
                                    fill
                                    className="ServGridImg"
                                    //placeholder="blur"
                                />
                            </div>
                            <div className="ServGridTextItem">
                                <h1 className="ServGridItemTextTitle">{post.title}</h1>
                                <p className="ServGridItemTextP">{post.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </div>

        </div>
        </div>
    );
};

export default Index;