"use client";

import Blog from "@/components/Blog";
import FaqSection from "@/components/faqsection";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return <div className="space-y-16 md:space-y-24">
    <Navbar/>
    <HeroSection/>
    <Blog/>
    <FaqSection />
    <Footer/>
  </div>;
};

export default page;
