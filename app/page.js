"use client";

import { motion, AnimatePresence } from "motion/react";

import Hero2 from "../components/Hero2";
import Wow1 from "../components/Wow1";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Home() {

  return (
      <AnimatePresence>
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{ease: "easeIn", duration: 1.0}}
              exit={{opacity: 0, transition: {duration: 0.8}}}
          >
              <NavBar/>
              <Hero2 />
              <Wow1 />
              <Why />
              <Services />
              <Testimonials />
              {/*<Contact />*/}
              <Footer />
        </motion.div>
      </AnimatePresence>
  );
}
