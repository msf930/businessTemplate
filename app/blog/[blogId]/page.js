

import React from 'react';
import {Button} from "@mui/material";
import {client} from "@/sanity/lib/client";
import NavBar from "@/components/NavBar";
import SoloProjHero from "@/components/SoloProjHero";
import {PortableText} from "next-sanity";
import {RichTextComponents} from "@/components/RichTextComponents";
import commaNumber from "comma-number";

import Image from "next/image";

import styles from "./styles.module.css";
import BlogAction from "@/components/BlogAction";
import Footer from "@/components/Footer";

const POST_QUERY = `*[_type == "blogs" && url.current == $blogId][0] {_id, title, mainImage {alt, asset -> { _id, url } }, bodyText, url, tag, date, content, testimonial }`;
const options = { next: { revalidate: 30 } };

const Page = async ({ params }) => {

    const { blogId } = await params;

    const post = await client.fetch(POST_QUERY, {blogId}, options);

    let wordCount = 0;

    for (let i = 0; i < post.content.length; i++) {
        if (post.content[i].children) {
            post.content[i].children.forEach(child => {
                if (child.text) {
                    wordCount += child.text.split(/\s+/).filter(word => word.length > 0).length;
                }
            });
        }
    }


    const readingTimeMinutes = Math.floor(wordCount / 200);
    const readingTime = readingTimeMinutes === 1 ? `${readingTimeMinutes} minute read` : `${readingTimeMinutes} minutes read`;

    return (
        <div>
            <NavBar/>
            <div className="flex flex-col items-center justify-center text-center bg-[#F5F5F5]">
                {post?.title && <h1 className="text-4xl mt-[150px] w-[80vw] font-bold capitalize mb-4 px-4 mx-4 md:mx-8">{post?.title}</h1>}
                {post?.date &&
                    <p className="m-2">{new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}</p>
                }
                {post?.content &&
                    <p className="mb-2 md:hidden">{readingTime}</p>
                }
                {post?.tag &&
                    <div className={styles.ProjectTagContTop}>
                        <p className={styles.ProjectTag}>{post.tag}</p>
                    </div>
                }
            </div>
            <SoloProjHero image={post.mainImage.asset.url} altText={post.mainImage.alt ? post.mainImage.alt : post.title}/>
            <div className={styles.ProjectInfoContainer}>
                <div className={styles.ProjectTitleContainer}>
                    {post?.title &&
                        <h1 className={styles.ProjectTitle}>{post?.title}</h1>
                    }
                    {post?.tag &&
                        <div className={styles.ProjectTagCont}>
                            <p className={styles.ProjectTag}>{post.tag}</p>
                        </div>
                    }

                </div>
                {post?.date &&
                        <p className={styles.ProjectInfoText}>{new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                        })}</p>
                }
                {post?.content &&
                    <p className={styles.ProjectInfoText}>{readingTime}</p>
                }
            </div>
            <div className={styles.ServDynTextCont}>
                <div className={styles.PortableTextCont}>
                    {post?.content && <PortableText value={post.content} components={RichTextComponents}/>}
                </div>
            </div>
            <BlogAction/>
            <Footer/>

        </div>
    );
};

export default Page;