"use client"
import Image from "next/image";
import { Carousel, Nav } from 'react-bootstrap';
import FAQ from "@/components/FAQ";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.scss";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
      </main>
    </>
  );
}
