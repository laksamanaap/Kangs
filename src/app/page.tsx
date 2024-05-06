"use client"
import Image from "next/image";
import { Carousel, Nav } from 'react-bootstrap';
import FAQ from "@/components/FAQ";
import Navbars from "@/components/Navbars";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function Home() {
  return (
    <>
      <main>
        <Navbars />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
