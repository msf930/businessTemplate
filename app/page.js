"use client";

import { useEffect } from "react";
import Hero2 from "../components/Hero2";
import Wow1 from "../components/Wow1";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  // useEffect( () => {
  //     (
  //         async () => {
  //             const LocomotiveScroll = (await import('locomotive-scroll')).default
  //             const locomotiveScroll = new LocomotiveScroll();
  //         }
  //     )()
  // }, [])

  return (
    <main>
      <Hero2 />
      <Wow1 />
      <Why />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
