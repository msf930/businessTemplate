
import SoloServeHero from "@/components/SoloServeHero";
import {RichTextComponents} from "@/components/RichTextComponents";
import {Button} from "@mui/material";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const SERVICE_QUERY = `*[_type == "services" && slug.current == $serviceId][0] {_id, title, mainImage {alt, asset -> { _id, url } }, body, slug }`;
const options = { next: { revalidate: 30 } };


const Page = async ({params}) => {

    const { serviceId } = await params;

    const service = await client.fetch(SERVICE_QUERY, {serviceId}, options);



    return (
        <div>
            <NavBar/>
            <div className="flex flex-col text-center justify-center items-center bg-[#F5F5F5]">
                    <h1 className="text-4xl mt-28 font-bold capitalize mb-4">Services Info</h1>
                <div className=" mt-1 mb-4 w-[60vw]">
                    {/*<div className="flex justify-start items-center">*/}
                    {/*    <Button  color="#000000"  href="/services">*/}
                    {/*        &lt;  Return to Services*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                    <div className="flex justify-center items-center">
                        <p >Proven Excellence</p>
                    </div>
                    {/*<></>*/}
                </div>
            </div>
            <SoloServeHero title={service?.title} image={service?.mainImage?.asset?.url} altText={service.mainImage.alt}/>
            <div className="ServDynTextCont">
                <div className="PortableTextCont">
                   <PortableText value={service.body} components={RichTextComponents}/>
                </div>
            </div>
            <div className="ActionContainer">
                <h1 className="ServeActionTitle">Learn More About Rocky Mountain Remodels</h1>
                <Button className="ActionBtn" href="/contact">Contact Us</Button>
            </div>
            <Footer/>
        </div>
    );
};

export default Page;