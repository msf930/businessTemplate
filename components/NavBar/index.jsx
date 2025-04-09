"use client"

import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import {motion, useMotionValueEvent, useScroll} from "motion/react";

import React, {useEffect, useState} from "react";

import { usePathname  } from "next/navigation";
import {client} from "@/sanity/lib/client";

const CONTACT_QUERY = `*[_type == "generalSettings"] {_id, logo { asset -> { _id, url} }}`;
const options = { next: { revalidate: 30 } };

export default function Nav() {

    const [navIcon, setNavIcon] = useState(`${styles.navIconClosed}`);
    const [showNavbar, setShowNavbar] = useState(false);
    const [navBarActive, setNavBarActive] = useState(`${styles.navelements}`);
    const [navBackground, setNavBackground] = useState(`${styles.navContMobile}`);
    const [isAtTop, setIsAtTop] = useState(true);

    const handleShowNavbar = () => {
        setShowNavbar((showNavbar) => {
            const newShowNavbar = !showNavbar;

            if (newShowNavbar && !isAtTop) {
                setNavBarActive(`${styles.navelementsactive}`);
                setNavIcon(`${styles.navIconOpen}`)
                setNavBackground(`${styles.navContMobileScroll}`);
            } else if (newShowNavbar && isAtTop) {
                setNavBarActive(`${styles.navelementsactive}`);
                setNavIcon(`${styles.navIconOpen}`);
                setNavBackground(`${styles.navContMobileScroll}`);
            }
            else if (!newShowNavbar && !isAtTop) {
                setNavBarActive(`${styles.navelements}`);
                setNavIcon(`${styles.navIconClosed}`);
                setNavBackground(`${styles.navContMobileScroll}`);
            }
            else if (!newShowNavbar && isAtTop) {
                setNavBarActive(`${styles.navelements}`);
                setNavIcon(`${styles.navIconClosed}`);
                setNavBackground(`${styles.navContMobile}`);
            }

            return newShowNavbar;
        });
    };

    const { scrollY } = useScroll()

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious()

        if (current > previous && current > 150) {
            setHidden(true)
            setShowNavbar(false);
            setNavIcon(`${styles.navIconClosed}`);
        } else {
            setHidden(false)
            setShowNavbar(false);
            setNavIcon(`${styles.navIconClosed}`);
        }

        if(current < 150) {
            setNavBackground(`${styles.navContMobile}`)
            setIsAtTop(true)
        } else {
            setNavBackground(`${styles.navContMobileScroll}`);
            setIsAtTop(false)
        }

        if(current > previous && showNavbar){
            setShowNavbar(true);
            handleShowNavbar();


        } else if(current < previous && showNavbar){
            setShowNavbar(true);
            handleShowNavbar();

        }


    })


    const pathname = usePathname();

    const [contactData, setContactData] = useState([]);
    const [contactIsLoaded, setContactIsLoaded] = useState(false);

    useEffect(() => {
        setContactIsLoaded(false);
        const fetchData = async () => {
            const result = await client.fetch(CONTACT_QUERY, {}, options);
            setContactData(result);
        };
        fetchData();
        setContactIsLoaded(true);
    }, []);


    return (
        <motion.header
            animate={hidden ? "hide" : "show"}
            variants={{
                show: {y: 0, opacity: 1},
                hide: {y: "-100%", opacity: 0}
            }}
            transition={{duration: 0.3, ease: "easeInOut"}}
            className={styles.nav}
        >
            <nav className={styles.navCont}>
                <div className={styles.navImgCont}>
                    <Link href="/">
                        {contactData[0]?.logo?.asset?.url &&
                            <Image src={contactData[0]?.logo?.asset?.url} alt="logo" height={70} width={70}/>
                        }
                    </Link>
                </div>
                <div className={styles.navLinkCont}>
                    <div>
                        <Link href="/">Home</Link>
                    </div>
                    <div>
                        <Link href="/about">About</Link>
                    </div>
                    <div>
                        <Link href="/services">Services</Link>
                    </div>
                    <div>
                        <Link href="/projects">Projects</Link>
                    </div>
                    <div>
                        <Link href="/contact">Contact</Link>
                    </div>

                </div>
            </nav>
            <nav className={navBackground}>
                <div className={styles.navLogoMobile}>
                    <Link href="/">
                        <Image src="/RMTNLogo.png" alt="logo" height={50} width={50}/>
                    </Link>
                </div>
                <div>
                    <button className={navIcon} onClick={handleShowNavbar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className={navBarActive}>
                    <nav>
                        <ul>
                            <li>
                                <Link
                                    href="/"
                                    className={pathname === "/" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={pathname === "/about" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className={pathname === "/services" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className={pathname === "/projects" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className={pathname === "/contact" ? styles.navMenuLinkActive : styles.navMenuLink}
                                    onClick={handleShowNavbar}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </motion.header>
    );
}