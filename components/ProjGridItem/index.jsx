"use client";

import React, {useState} from 'react';
import Image from "next/image";
import Services1 from "@/public/Services1.jpg";
import Link from "next/link";



const Index = ({title, type, location}) => {
    const [proj, setProj] = useState(title);
    const [projImg, setProjImg] = useState(`/${proj}.jpg`);
    const [projHref, setProjHref] = useState(`projects/${proj}`);
    return (
        <Link href={projHref} className="ProjItemContainer">
            <div className="ProjImgItemCont">
                <div  className="projImgContainer">
                    <h1 className="ProjImgText">Learn More</h1>
                    <img className="projItemImg" src={projImg} alt={projImg} width="100%" placeholder="blur" />
                </div>
            </div>
            <div className="projItemTextCont">
                <h1 className="projItemTitle">{title}</h1>
                <h1 className="projItemType">{type}</h1>
                <h1>{location}</h1>
            </div>
        </Link>
    );
};

export default Index;