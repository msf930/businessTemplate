"use client";

import React, {useEffect, useState} from 'react';
import {Button} from "@mui/material";

const Page = ({ params }) => {

    const [project, setProject] = useState(decodeURI(params.projId));
    const [projectImg, setProjectImg] = useState(`/${project}.jpg`);
    const [projectImg2, setProjectImg2] = useState(`/${project}2.jpg`);
    useEffect( () => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default
                const locomotiveScroll = new LocomotiveScroll();
            }
        )()
    }, [])
    return (
        <div>
            <div className="flex flex-col text-center">
                <h1 className="text-4xl mt-28 font-bold capitalize mb-4">Project Info</h1>
                <p className=" mb-10">Cutting-Edge Construction</p>
            </div>
            <div className="ServDynImgContainer">
                <h1 className="ServeDynHeroText">{project}</h1>
                <img src={projectImg} className="ServDynImg" data-scroll data-scroll-speed="-1"/>
            </div>
            <div className="ServDynImgContainerSm">
                <h1 className="ServeDynHeroTextSm">{project}</h1>
                <img src={projectImg} className="ServDynImgSm"/>
            </div>

            <div className="ServDynTextCont">
                <div className="ServeDynTextLeft">
                    <h1 className="font-bold text-4xl capitalize leading-relaxed"> {project} </h1>
                    <p className="mt-8 text-left">Fusce ac elementum ante, in elementum dolor. Etiam vulputate orci et odio vehicula, id ultricies nulla congue. Donec commodo, tellus at feugiat pharetra, metus augue malesuada ex, a aliquam augue est nec neque.<br/><br/> In lacinia posuere nisl nec sodales. Nam eu venenatis ex, a aliquam tellus. Ut pretium, nulla eget consequat vehicula, nulla lacus aliquam orci, a iaculis nisl nulla ac dolor. Fusce placerat ac erat ac ullamcorper. <br/><br/>Fusce turpis ex, fringilla quis arcu ac, molestie rutrum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ligula arcu, gravida quis vehicula malesuada, aliquet sed lectus. Quisque malesuada, sem ac rutrum congue, velit massa lacinia felis, ut laoreet purus enim vel turpis.</p>
                </div>
                <div className="ServeDynTextRight">
                    <img src={projectImg2} className="ServDynImg2"/>

                </div>
            </div>
            <div className="ServDynLoremCont">
                <div className="ServDynLoremTitle">
                    <h1 className="text-4xl  font-bold capitalize mb-20">Project Outline</h1>
                </div>
                <p className="ServeDynTextLorem">Nullam vel bibendum turpis. Sed cursus nisi metus, vel rutrum odio eleifend sit amet. Nullam viverra mattis interdum. Nunc dapibus sem diam, sed ullamcorper elit aliquam in. Etiam eu mi semper, dictum dolor sit amet, tempus dolor. <br/><br/>Integer eget tellus et sapien facilisis cursus ut ac sem. Vestibulum nec cursus arcu, non sollicitudin purus. Aenean ut urna sit amet elit semper blandit. Maecenas elementum sit amet quam quis fermentum. Etiam iaculis felis id tellus condimentum venenatis. Etiam nec tortor in nisi luctus luctus. Phasellus nisi nisi, accumsan quis molestie et, pharetra sit amet justo.<br/><br/> Pellentesque mauris felis, ultricies nec odio et, cursus congue erat. Aliquam et commodo est, sit amet cursus odio.</p>
            </div>
            <div className="ActionContainer">
                <h1 className="ServeActionTitle">Learn More About Our Projects</h1>
                <Button className="ActionBtn">Contact Us</Button>
            </div>

        </div>
    );
};

export default Page;