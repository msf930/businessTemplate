import React from 'react';
import {CgFacebook, CgTwitter, CgYoutube} from "react-icons/cg";
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footerContainer">
            <div className="footerSeg">
                <h1>© {year} National Construction Company</h1>
            </div>
            <div className="footerSeg">
                <div className="flex flex-row gap-4">
                    <CgFacebook />
                    <CgTwitter />
                    <CgYoutube />
                </div>
            </div>
        </div>
    );
};

export default Footer;