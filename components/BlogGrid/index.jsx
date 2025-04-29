"use client";

import React from 'react';
import ProjGridItem from "@/components/ProjGridItem";

import { useEffect, useState } from "react";

import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import RippleButton from "@/components/RippleButton";
import BlogGridSkeleton from "@/components/BlogGridSkeleton";


const options = { next: { revalidate: 30 } };

export default function Index(){
    const truncate = (text) => {
        const words = text.split(" ");
        if (words.length > 20) {
            return words.slice(0, 20).join(" ") + "...";
        }
        return text;
    };

    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [nextPage, setNextPage] = useState([]);
    const [loading, setLoading] = useState(true);

    const POSTS_QUERY = `*[
    _type == "blogs"
    && defined(url.current)
  ]|order(date desc)[${(page - 1) * 6}...${page * 6}]{_id, title, url, date, mainImage { asset -> { _id, url } }, body, excerpt, tag}`;

    const NEXT_POSTS_QUERY = `*[
    _type == "blogs"
  ]|order(date desc)[${page * 6}...${(page + 1) * 6}]{_id}`;

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const fetchedPosts = await client.fetch(POSTS_QUERY);
            setPosts(fetchedPosts);
            const fetchNextPosts = await client.fetch(NEXT_POSTS_QUERY);
            setNextPage(fetchNextPosts);
            setLoading(false);
        };
        fetchPosts();
    }, [page, POSTS_QUERY]);


    return (
        <div>
            <div className="ServGridContainer">
                <div className="ServGridRows">
                    <div className="ServGridCol">
                        {loading
                            ?
                                <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5">
                                    <BlogGridSkeleton/>
                                    <BlogGridSkeleton/>
                                    <BlogGridSkeleton/>
                                </div>
                            :
                            posts.length
                                ?
                                    posts.map((post, index) => (
                                        <div key={index} className="ServGridItem">
                                            <Link className="ServGridLinkContainer" href={`blog/${post.url.current}`}>
                                                <div className="ServImgItemCont">
                                                    <RippleButton />
                                                    <h1 className="ServImgText">Read Blog</h1>
                                                    <Image
                                                        src={post.mainImage.asset.url}
                                                        alt={post.title}
                                                        objectFit="cover"
                                                        fill
                                                        className="ServGridImg"
                                                        //placeholder="blur"
                                                    />
                                                </div>
                                                {/*<div className="ServGridTextItem">*/}
                                                <div className="flex flex-col justify-between h-full md:w-[30vw] sm:w-[80vw]">
                                                    {post?.date && (
                                                        <p className="pt-5 pb-0">{new Date(post.date).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}</p>
                                                    )}
                                                    {post?.title && <h1 className="pt-2 text-lg font-bold">{post.title}</h1>}
                                                    {post?.excerpt && <p className="pt-2">{truncate(post.excerpt)}</p>}
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                :
                                !loading && (
                                    <div className="flex w-full justify-center items-center gap-5">
                                    <h1 className="text-2xl font-bold">No posts found</h1>
                                    </div>
                                )
                        }

                    </div>
                    <div className="flex justify-center items-center gap-5">

                            <div className="flex justify-center items-center gap-5 pb-5">
                                {page > 1 && (
                                <button
                                    className="bg-black text-white px-4 py-2 rounded"
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={page === 1}
                                >
                                    Previous Page
                                </button>
                                    )}
                                {nextPage.length > 0 && !loading &&(
                                <button
                                    className="bg-black text-white px-4 py-2 rounded"
                                    onClick={() => setPage((prev) => prev + 1)}
                                >
                                    Next Page
                                </button>
                                )}
                            </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

