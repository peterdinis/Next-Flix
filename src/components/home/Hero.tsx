"use client";

import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import ScrollToTop from "@/hooks/useScroll";
import InfoModal from "../modals/InfoModal";
import {
  useFetchComedyMovies,
  useFetchNetflixOriginals,
  useFetchTopActionMovies,
  useFetchTopRated,
  useFetchTrendingMovies,
} from "@/api/movies/moviesRequests";
import MovieRow from "../movies/MovieRow";

const Hero: FC = () => {
  const { data: netflixOriginals } = useFetchNetflixOriginals();
  const { data: comedyMovies } = useFetchComedyMovies();
  const { data: trendingData } = useFetchTrendingMovies();
  const { data: topRatedData } = useFetchTopRated();
  const { data: actionData } = useFetchTopActionMovies();

  return (
    <>
      <Navbar />
      <InfoModal netflixOriginals={netflixOriginals} />
      <section className="md:space-y-24">
        <MovieRow title="Comedies" movies={comedyMovies} />
      </section>
      <ScrollToTop />
    </>
  );
};

export default Hero;
