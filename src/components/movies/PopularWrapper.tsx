import { FC } from "react";

import SecondNavbar from "../shared/navbar/SecondNavbar";
import { useFetchNetflixOriginals } from "@/api/movies/moviesRequests";
import MovieRow from "./MovieRow";

const PopularWrapper: FC = () => {
  const { data: originalData } = useFetchNetflixOriginals();

  console.log(originalData);

  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
        <MovieRow title="Netflix series" movies={originalData} />
      </section>
    </>
  );
};

export default PopularWrapper;
