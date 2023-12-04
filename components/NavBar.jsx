"use client";

import React, {useState} from 'react';
import Image from "next/image";
import Logo from '../public/Logo.png'
import Link from "next/link";
import Fade from '@mui/material/Fade';
import {AiOutlineClose, AiOutlineMenu, AiOutlineLine, AiOutlineMinus} from "react-icons/ai";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const handleNav = () => {
        //setMenuOpen(!menuOpen);
        const checkBox = document.getElementById("myCheck");
        if (checkBox.checked === true){
            setMenuOpen(true);
        } else {
            setMenuOpen(false);
        }
    }
    const handleHamburgerClose = () => {
        const checkBox = document.getElementById("myCheck");
        checkBox.checked = false;
        setMenuOpen(false);
    }
    const nav = (<div className="
                fixed right-0 top-0  w-[100%] sm:hidden h-screen bg-[#ecf0f3] text-center pt-20 ease-in duration-500
               ">

        <div className="flex-col py-4 ">
            <ul>
                <Link href="/">
                    <li
                        onClick={handleHamburgerClose}
                        className="py-4 cursor-pointer"
                    >
                        Home
                    </li>
                </Link>
                <Link href="/about">
                    <li
                        onClick={handleHamburgerClose}
                        className="py-4 cursor-pointer"
                    >
                        About
                    </li>
                </Link>
                <Link href="/services">
                    <li
                        onClick={handleHamburgerClose}
                        className="py-4 cursor-pointer"
                    >
                        Services
                    </li>
                </Link>
                <Link href="/projects">
                    <li
                        onClick={handleHamburgerClose}
                        className="py-4 cursor-pointer"
                    >
                        Projects
                    </li>
                </Link>

                <Link href="/contact">
                    <li
                        onClick={handleHamburgerClose}
                        className="py-4 cursor-pointer"
                    >
                        Contact
                    </li>
                </Link>
            </ul>
        </div>
    </div>)
    return (
        <nav className=" h-24 w-full bg-white sticky top-0 z-40">
            <div className="flex justify-between items-center   h-full w-full px-4 2xl:px-16">
               <Link href="/">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width="75"
                        height="auto"
                        className="cursor-pointer"
                        priority
                    />
               </Link>
                <div className="hidden sm:flex">
                    <ul className="hidden sm:flex">
                        <Link href="/">
                            <li className="ml-10 text-xl">Home</li>
                        </Link>
                        <Link href="/about">
                            <li className="ml-10 text-xl">About</li>
                        </Link>
                        <Link href="/services">
                            <li className="ml-10 text-xl">Services</li>
                        </Link>
                        <Link href="/projects">
                            <li className="ml-10 text-xl">Projects</li>
                        </Link>
                        <Link href="/contact">
                            <li className="ml-10 text-xl">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <label className="hamburger-menu">
                        <input type="checkbox" id="myCheck" onClick={handleNav}/>
                    </label>
                </div>
            </div>
            {/*<div className={*/}
            {/*    menuOpen*/}
            {/*    ? "fixed right-0 top-0 opacity-100 w-[100%] sm:hidden h-screen bg-[#ecf0f3] text-center pt-20 ease-in duration-500"*/}
            {/*    : "fixed right-[-100%] opacity-0 w-[0%] top-0 text-center pt-20 h-screen ease-in duration-500"*/}
            {/*}>*/}
            <Fade in={menuOpen}>
                {nav}
            </Fade>
        </nav>
    );
};

export default NavBar;