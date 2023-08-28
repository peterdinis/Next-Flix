"use client";

import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import ScrollToTop from "@/hooks/useScroll";
import InfoModal from "../modals/InfoModal";
import { useFetchNetflixOriginals } from "@/api/movies/moviesRequests";

const Hero: FC = () => {
  const { data: netflixOriginals } = useFetchNetflixOriginals();

  return (
    <>
      <Navbar />
      <InfoModal netflixOriginals={netflixOriginals} />
      <section className="md:space-y-24">
          SOME TEXT
      </section>
      <ScrollToTop />
    </>
  );
};

export default Hero;
