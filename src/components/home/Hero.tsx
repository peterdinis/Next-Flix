"use client"

import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import ScrollToTop from "@/hooks/useScroll";

const Hero: FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
    </>
  )
};

export default Hero;
