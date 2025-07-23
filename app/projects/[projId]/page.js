

import React from 'react';
import Image from "next/image";

import styles from "./styles.module.css";

import {Button} from "@mui/material";
import {client} from "@/sanity/lib/client";
import {PortableText} from "next-sanity";
import commaNumber from "comma-number";

import NavBar from "@/components/NavBar";
import SoloProjHero from "@/components/SoloProjHero";
import {RichTextComponents} from "@/components/RichTextComponents";
import ProjAction from "@/components/ProjAction";
import Footer from "@/components/Footer";
import Matterport from "@/components/Matterport";



const PROJECT_QUERY = `*[_type == "projects" && url.current == $projId][0] {_id, title, description, mainImage {alt, asset -> { _id, url } }, bodyText, url, budget, duration, location, imageGallery[] { asset -> { _id, url  }, hotspot }, tag, testimonial, testimonialAuthor }`;
const options = { next: { revalidate: 30 } };

const Page = async ({ params }) => {

    const { projId } = await params;

    const project = await client.fetch(PROJECT_QUERY, {projId}, options);

    let budgetString = 0;
    if(project?.budget){
        budgetString =  commaNumber(project.budget);
    }

    return (
        <div>
            <NavBar/>
            <div className="flex flex-col justify-center items-center text-center bg-[#F5F5F5]">
                {project?.title && <h1 className="text-4xl mt-28 font-bold capitalize mb-4 px-4">{project?.title}</h1>}
                {project?.description && <p className=" mb-10 px-4 w-[90vw] md:w-[60vw]">{project?.description}</p>}
            </div>
            <SoloProjHero image={project.mainImage.asset.url} altText={project.mainImage.alt ? project.mainImage.alt : project.title}/>
            <div className={styles.ProjectInfoContainer}>
                <div className={styles.ProjectTitleContainer}>
                    {project?.title &&
                    <h1 className={styles.ProjectTitle}>{project?.title}</h1>
                    }
                    {project?.tag &&
                        <div className={styles.ProjectTagCont}>
                            <p className={styles.ProjectTag}>{project.tag}</p>
                        </div>
                    }
                </div>
                <div className={styles.ProjectDetails}>
                    <div className={styles.ProjectDetailsContainer}>
                        {project?.budget &&
                            <div className={styles.ProjectInfoItem}>
                                <h1 className={styles.ProjectInfoTitle}>Budget</h1>

                            </div>
                        }
                        {project?.duration &&
                            <div className={styles.ProjectInfoItem}>
                                <h1 className={styles.ProjectInfoTitle}>Duration</h1>

                            </div>
                        }
                        {project?.location &&
                            <div className={styles.ProjectInfoItem}>
                                <h1 className={styles.ProjectInfoTitle}>Location</h1>

                            </div>
                        }
                    </div>
                    <div className={styles.ProjectDetailsContainerData}>
                        {project?.budget &&
                            <div className={styles.ProjectInfoItemData}>

                                <p className={styles.ProjectInfoText}>${budgetString}</p>
                            </div>
                        }
                        {project?.duration &&
                            <div className={styles.ProjectInfoItemData}>

                                <p className={styles.ProjectInfoText}>{project.duration}</p>
                            </div>
                        }
                        {project?.location &&
                            <div className={styles.ProjectInfoItemData}>

                                <p className={styles.ProjectInfoText}>{project.location}</p>
                            </div>
                        }
                    </div>
                </div>

            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[60vw] h-[calc(60vw*0.75)]">
                    <Matterport/>
                </div>
            </div> 
            <div className={styles.ServDynTextCont}>
                <div className={styles.PortableTextCont}>
                    {project?.bodyText && <PortableText value={project.bodyText} components={RichTextComponents}/>}
                </div>
            </div>
            {project?.testimonial && project?.testimonialAuthor && (
                <div className={styles.ServDynTestimonialCont}>
                    <p className={styles.ServDynTestimonialText}>"{project.testimonial}"</p>
                    <p className={styles.ServDynTestimonialAuthor}>-{project.testimonialAuthor}</p>
                </div>
            )}
            <div className={styles.ProjectImageContainer}>
                <div className={styles.GalleryRows}>
                    <div className={styles.GalleryColumns}>
                        {project?.imageGallery && project.imageGallery.map((image, index) => (
                            <div className={styles.GalleryImg} key={index}>
                                <Image
                                    src={image.asset.url}
                                    alt={project.title}
                                    fill
                                    objectFit="cover"
                                    objectPosition={`${image.hotspot?.x * 100}% ${image.hotspot?.y * 100}%`}
                                />
                                {/*<Image  src={image.asset.url} alt={project.title} fill objectFit="cover" objectPosition={`50% 20%`}/>*/}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ProjAction/>
            <Footer/>

        </div>
    );
};

export default Page;