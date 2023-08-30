"use client"

import { FC } from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import { useFetchNetflixOriginals } from "@/api/movies/moviesRequests";
import MovieRow from "./MovieRow";

const SeriesWrapper: FC = () => {
  const {data: originalData} = useFetchNetflixOriginals();

  console.log(originalData);

  /* We must get here all data */
  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
        <MovieRow title="Netflix series" movies={originalData} />
      </section>
    </>
  );
};

export default SeriesWrapper;
