import React from 'react';
import BlogHead from "@/components/BlogHead";
import BlogGrid from "@/components/BlogGrid";
import BlogAction from "@/components/BlogAction";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <div>
            <NavBar/>
            <BlogHead/>
            <BlogGrid />
            <BlogAction/>
            <Footer/>
        </div>
    );
};

export default Page;