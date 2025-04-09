import React from 'react';
import ProjHead from "@/components/ProjHead";
import ProjGrid from "@/components/ProjGrid";
import ProjAction from "@/components/ProjAction";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const Page = () => {
    return (
        <div>
            <NavBar/>
            <ProjHead/>
            <ProjGrid />
            <ProjAction/>
            <Footer/>
        </div>
    );
};

export default Page;