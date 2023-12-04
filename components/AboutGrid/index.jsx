import React from 'react';
import Hero from "@/public/Hero.jpg";
import Image from "next/image";
import Grid1 from '@/public/Grid1.jpg'
import Grid2 from '@/public/Grid2.jpg'
import Grid3 from '@/public/Grid3.jpg'
import Grid4 from '@/public/Grid4.jpg'

const Index = () => {
    return (
        <>
            <div className="GridContainer">
                <div className="GridRows">
                    <div className="GridCol">
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Environmental, Social and Governance</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Grid1}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Lean Construction</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Grid3}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                    </div>
                    <div className="GridCol">

                        <div>
                            <Image
                                src={Grid2}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Innovation</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Grid4}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Safety and Wellness</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="GridContainerSm">
                <div className="GridRows">
                    <div className="GridCol">
                        <div>
                            <Image
                                src={Grid1}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Environmental, Social and Governance</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>

                        <div>
                            <Image
                                src={Grid3}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Lean Construction</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>

                    </div>
                    <div className="GridCol">

                        <div>
                            <Image
                                src={Grid2}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Innovation</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                        <div>
                            <Image
                                src={Grid4}
                                alt="Construction"
                                width="100%"
                                className="GridImg"

                            />
                        </div>
                        <div className="GridTextItem">
                            <h1 className="GridItemTextTitle">Safety and Wellness</h1>
                            <p className="GridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;