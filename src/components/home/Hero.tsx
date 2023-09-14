"use client";

import { FC } from "react";
import {
  useFetchComedyMovies,
  useFetchDocumentaries,
  useFetchNetflixOriginals,
  useFetchRomanceMovies,
  useFetchTopActionMovies,
  useFetchTopRated,
  useFetchTrendingMovies,
  useHororMovies,
} from "@/api/queries/movies/moviesRequests";
import { modalState } from "@/recoil/atoms/modalAtom";
import { useRecoilValue } from "recoil";
import ScrollToTop from "react-scroll-to-top";
import { Navbar } from "../shared";
import { InfoModal, MovieModal } from "../modals";
import { MovieRow } from "../movies";

const Hero: FC = () => {
  const { data: netflixOriginals } = useFetchNetflixOriginals();
  const { data: comedyMovies } = useFetchComedyMovies();
  const { data: trendingData } = useFetchTrendingMovies();
  const { data: topRatedData } = useFetchTopRated();
  const { data: actionData } = useFetchTopActionMovies();
  const { data: hororData } = useHororMovies();
  const { data: romanceData } = useFetchRomanceMovies();
  const { data: documentaries } = useFetchDocumentaries();

  const showModal = useRecoilValue(modalState);

  return (
   <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}
    >
      <Navbar />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
      <ScrollToTop />
      {/* TODO: Check this later */}
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
      </main>
      {showModal && <MovieModal />}
    </div>
  );
};

export default Hero;
