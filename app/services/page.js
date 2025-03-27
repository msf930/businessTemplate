import React from 'react';
import ServHead from "@/components/ServHead";
import ServGrid from "@/components/ServGrid";
import ServAction from "@/components/ServAction";
import NavBar from "@/components/NavBar";

const Page = () => {
    return (
        <div>
            <NavBar/>
            <ServHead/>
            <ServGrid/>
            <ServAction/>
        </div>
    );
};

export default Page;