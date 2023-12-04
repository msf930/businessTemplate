"use client";

import React, {useState} from 'react';
import ProjGridItem from "@/components/ProjGridItem";

const Index = () => {

    return (
        <div>
            <div className="ProjGridCont">
                <div className="ProjGridRow">
                    <div className="ProjGridCol">
                        <ProjGridItem title="Boulder Public Health Laboratory" type="Healthcare" location="Boulder, CO"/>
                        <ProjGridItem title="The Myrtle Woldson Performing Arts Center" type="Education" location="Spokane, WA"/>
                        <ProjGridItem title="Great American Tower" type="Commercial" location="Cincinnati, OH"/>
                    </div>
                    <div className="ProjGridCol">
                        <ProjGridItem title="Northeast Lakeview College Paluxy Hall" type="Education" location="San Antonio, TX"/>
                        <ProjGridItem title="Massachusetts General Hospital" type="Healthcare" location="Boston, MA"/>
                        <ProjGridItem title="SoFi Stadium" type="Sports/Public Assembly" location="Inglewood, CA"/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Index;