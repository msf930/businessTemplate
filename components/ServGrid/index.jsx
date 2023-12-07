import React from 'react';
import Image from "next/image";
import Serv1 from "@/public/Preconstruction.jpg";
import Serv2 from "@/public/Construction Management.jpg";
import Serv3 from "@/public/Project Management.jpg";
import Serv4 from "@/public/Lean Construction.jpg";
import Serv5 from "@/public/Supply Chain Management.jpg";
import Serv6 from "@/public/Virtual Design And Construction.jpg";
import Link from "next/link";

const Index = () => {
    return (
        <div className="ServGridContainer">
            <div className="ServGridRows">
                <div className="ServGridCol">
                    <div className="ServGridItem">
                        <Link href="services/Preconstruction">
                            <div className="ServImgItemCont">
                                <h1 className="ServImgText">Learn More</h1>
                                <Image
                                    src={Serv1}
                                    alt="Construction"
                                    width="100%"
                                    className="ServGridImg"
                                    placeholder="blur"

                                />
                            </div>
                            <div className="ServGridTextItem">
                                <h1 className="ServGridItemTextTitle">Preconstruction</h1>
                                <p className="ServGridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div className="ServGridItem">
                            <Link href="services/Construction Management">
                                <div className="ServImgItemCont">
                                    <h1 className="ServImgText">Learn More</h1>
                                    <Image
                                        src={Serv2}
                                        alt="Construction"
                                        width="100%"
                                        className="ServGridImg"
                                        placeholder="blur"

                                    />
                                </div>
                                <div className="ServGridTextItem">
                                    <h1 className="ServGridItemTextTitle">Construction Management</h1>
                                    <p className="ServGridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                                    </p>
                                </div>
                            </Link>
                    </div>
                    <div className="ServGridItem">
                            <Link href="services/Project Management">
                                <div className="ServImgItemCont">
                                    <h1 className="ServImgText">Learn More</h1>
                                    <Image
                                        src={Serv3}
                                        alt="Construction"
                                        width="100%"
                                        className="ServGridImg"
                                        placeholder="blur"

                                    />
                                </div>
                                <div className="ServGridTextItem">
                                    <h1 className="ServGridItemTextTitle">Project Management</h1>
                                    <p className="ServGridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                                    </p>
                                </div>
                            </Link>
                    </div>
                </div>
                <div className="ServGridCol">
                    <div className="ServGridItem">
                            <Link href="services/Lean Construction">
                                <div className="ServImgItemCont">
                                    <h1 className="ServImgText">Learn More</h1>
                                    <Image
                                        src={Serv4}
                                        alt="Construction"
                                        width="100%"
                                        className="ServGridImg"
                                        placeholder="blur"

                                    />
                                </div>
                                <div className="ServGridTextItem">
                                    <h1 className="ServGridItemTextTitle">Lean Construction</h1>
                                    <p className="ServGridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                                    </p>
                                </div>
                            </Link>

                    </div>
                    <div className="ServGridItem">
                            <Link href="services/Supply Chain Management">
                                <div className="ServImgItemCont">
                                    <h1 className="ServImgText">Learn More</h1>
                                    <Image
                                        src={Serv5}
                                        alt="Construction"
                                        width="100%"
                                        className="ServGridImg"
                                        placeholder="blur"

                                    />
                                </div>
                                <div className="ServGridTextItem">
                                    <h1 className="ServGridItemTextTitle">Supply Chain Management</h1>
                                    <p className="ServGridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                                    </p>
                                </div>
                            </Link>
                    </div>
                    <div className="ServGridItem">
                            <Link href="services/Virtual Design And Construction">
                                <div className="ServImgItemCont">
                                    <h1 className="ServImgText">Learn More</h1>
                                    <Image
                                        src={Serv6}
                                        alt="Construction"
                                        width="100%"
                                        className="ServGridImg"
                                        placeholder="blur"

                                    />
                                </div>
                                <div className="ServGridTextItem">
                                    <h1 className="ServGridItemTextTitle">Virtual Design & Construction</h1>
                                    <p className="ServGridItemTextP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Duis malesuada ipsum eu enim suscipit, vitae facilisis dolor fermentum.
                                    </p>
                                </div>
                            </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Index;