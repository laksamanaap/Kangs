"use client"
import Image from "next/image";
import { Carousel, Nav } from 'react-bootstrap';
import FAQ from "@/components/FAQ";
import Navbars from "@/components/Navbars";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function Home() {
  return (
    <>
      <main>
        <Navbars />
        <Hero />
        <Services />
        <Blog />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
