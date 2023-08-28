"use client";

import { FC } from "react";
import Navbar from "../shared/navbar/Navbar";
import ScrollToTop from "@/hooks/useScroll";
import InfoModal from "../modals/InfoModal";
import {
  useFetchComedyMovies,
  useFetchDocumentaries,
  useFetchNetflixOriginals,
  useFetchRomanceMovies,
  useFetchTopActionMovies,
  useFetchTopRated,
  useFetchTrendingMovies,
  useHororMovies,
} from "@/api/movies/moviesRequests";
import MovieRow from "../movies/MovieRow";

const Hero: FC = () => {
  const { data: netflixOriginals } = useFetchNetflixOriginals();
  const { data: comedyMovies } = useFetchComedyMovies();
  const { data: trendingData } = useFetchTrendingMovies();
  const { data: topRatedData } = useFetchTopRated();
  const { data: actionData } = useFetchTopActionMovies();
  const { data: hororData } = useHororMovies();
  const { data: romanceData } = useFetchRomanceMovies();
  const { data: documentaries } = useFetchDocumentaries();
  return (
    <>
      <Navbar />
      <InfoModal netflixOriginals={netflixOriginals} />
      <section className="md:space-y-24">
        <MovieRow title="Trending Now" movies={trendingData} />
        <MovieRow title="Top rated" movies={topRatedData} />
        <MovieRow title="Action Movies" movies={actionData} />
        <MovieRow title="Comedies" movies={comedyMovies} />
        <MovieRow title="Horor Movies" movies={hororData} />
        <MovieRow title="Romance Movies" movies={romanceData} />
        <MovieRow title="Documentaries" movies={documentaries} />
      </section>
      <ScrollToTop />
    </>
  );
};

export default Hero;
