import React from 'react';
import ProjHead from "@/components/ProjHead";
import ProjGrid from "@/components/ProjGrid";
import ProjAction from "@/components/ProjAction";

const Page = () => {
    return (
        <div>
            <ProjHead/>
            <ProjGrid />
            <ProjAction/>
        </div>
    );
};

export default Page;