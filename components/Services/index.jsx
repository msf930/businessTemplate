import React from 'react';
import Image from "next/image";
import {Button} from "@mui/material";
import Services1 from "@/public/Services1.jpg"
import Services2 from "@/public/Services2.jpg"
import Services3 from "@/public/Services3.jpg"
import Link from "next/link";

const Index = () => {
    return (
        <div className="flex flex-col mt-24 bg-gray-100">
            <div className="serviceTitle">
                <h1>Our Services Include</h1>
            </div>
            <div className="serviceContainer">
                <Link href="services/Preconstruction" className="serviceItemContainer">
                    <div className="serviceItemText">Preconstruction</div>
                    <Image className="serviceItemImg" src={Services1} alt="img" width="100%" placeholder="blur" />
                </Link>
                <Link href="services/Construction Management" className="serviceItemContainer">
                    <h1 className="serviceItemText">Construction Management</h1>
                    <Image className="serviceItemImg" src={Services2} alt="img" width="100%" placeholder="blur" />
                </Link>
                <Link href="services/Project Management" className="serviceItemContainer">
                    <h1 className="serviceItemText">Project Management</h1>
                    <Image className="serviceItemImg" src={Services3} alt="img" width="100%" placeholder="blur" />
                </Link>
            </div>
            <div className="serviceContainerSm">
                <div  className="serviceItemContainer">
                    <Link href="services/Preconstruction" className="serviceItemText">Preconstruction</Link>
                    <Image className="serviceItemImg" src={Services1} alt="img" width="100%" placeholder="blur" />
                </div>
                <div  className="serviceItemContainer">
                    <Link href="services/Construction Management"className="serviceItemText">Construction Management</Link>
                    <Image className="serviceItemImg" src={Services2} alt="img" width="100%" placeholder="blur" />
                </div>
                <div  className="serviceItemContainer">
                    <Link href="services/Project Management" className="serviceItemText">Project Management</Link>
                    <Image className="serviceItemImg" src={Services3} alt="img" width="100%" placeholder="blur" />
                </div>
            </div>
            <div className="mt-24 mb-24 text-center">
                <Button href="/services" className="serviceButton">See All Services</Button>
            </div>
        </div>
    );
};

export default Index;