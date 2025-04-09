import React from 'react';
import ServHead from "@/components/ServHead";
import ServGrid from "@/components/ServGrid";
import ServAction from "@/components/ServAction";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <div>
            <NavBar/>
            <ServHead/>
            <ServGrid/>
            <ServAction/>
            <Footer/>
        </div>
    );
};

export default Page;