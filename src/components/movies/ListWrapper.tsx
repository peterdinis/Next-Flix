import { FC } from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import { useFetchNetflixOriginals } from "@/api/movies/moviesRequests";
import MovieRow from "./MovieRow";

const ListWrapper: FC = () => {
  const { data: originalData } = useFetchNetflixOriginals();
  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
        <MovieRow title="Netflix series" movies={originalData} />
      </section>
    </>
  );
};

export default ListWrapper;
