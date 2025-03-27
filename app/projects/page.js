import React from 'react';
import ProjHead from "@/components/ProjHead";
import ProjGrid from "@/components/ProjGrid";
import ProjAction from "@/components/ProjAction";

import NavBar from "@/components/NavBar";

const Page = () => {
    return (
        <div>
            <NavBar/>
            <ProjHead/>
            <ProjGrid />
            <ProjAction/>
        </div>
    );
};

export default Page;