import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

// import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
const { projectId } = client.config();
const imageBuilder = urlBuilder({
    projectId: projectId,
    dataset: "production",
});

export const RichTextComponents = {
    types: {
        image: ({ value, isInline }) => {
            const { width, height } = getImageDimensions(value);
            return (
                <img
                    src={imageBuilder.image(value).url()}
                    alt={value.alt || " "}
                    loading='lazy'
                    className={`my-8 mx-auto ${
                        isInline ? "max-w-xs" : "max-w-full"
                    } rounded-lg shadow-lg`}
                    width={500}
                    height={500}
                />
            );
        },
        code: ({ value }) => {
            const code = value.code;
            const filename = value.filename;

            return (
                <div className='bg-gray-900 rounded-lg p-4 my-4'>
                    <div className='flex justify-between mb-2'>
                        <p className='text-gray-400'>{filename}</p>
                    </div>
                    <pre
                        data-language='javascript'
                        className='p-2 bg-gray-800 rounded-lg overflow-auto'
                    >
            {/* <Refractor language='js' value={code} /> */}
          </pre>
                </div>
            );
        },

    },

    block: {
        h1: ({ children }) => (
            <h1 className={styles.blockH1}>{children}</h1>
        ),
        h2: ({ children }) => (
            <h2 className={styles.blockH2}>{children}</h2>
        ),
        h3: ({ children }) => (
            <h3 className={styles.blockH3}>{children}</h3>
        ),
        h4: ({ children }) => (
            <h3 className={styles.blockH4}>{children}</h3>
        ),
        blockquote: ({ children }) => (
            <blockquote className='border-l-4 pl-4 my-4 italic text-gray-700 border-gray-300'>
                {children}
            </blockquote>
        ),
        normal: ({ children }) => <p className={styles.blockP}>{children}</p>,
    },

    list: {
        bullet: ({ children }) => (
            <ul className='list-disc ml-8 my-4 font-bold'>{children}</ul>
        ),
        number: ({ children }) => (
            <ol className='list-decimal ml-8 my-4'>{children}</ol>
        ),
        checkmarks: ({ children }) => (
            <ol className='m-auto text-lg'>{children}</ol>
        ),
    },
    marks: {
        link: ({ children, value }) => {
            const rel = !value.href.startsWith("/")
                ? "noreferrer noopener"
                : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    target='_blank'
                    className='text-blue-500 hover:text-blue-700'
                >
                    {children}
                </Link>
            );
        },
    },
};