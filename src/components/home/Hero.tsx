"use client";

import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import ScrollToTop from "@/hooks/useScroll";
import InfoModal from "../modals/InfoModal";
import { useFetchNetflixOriginals } from "@/api/movies/moviesRequests";

const Hero: FC = () => {
  const {
    data: netflixOriginals,
    error,
    isLoading,
  } = useFetchNetflixOriginals();

  return (
    <>
      <Navbar />
      <InfoModal netflixOriginals={netflixOriginals} />
      <ScrollToTop />
    </>
  );
};

export default Hero;
