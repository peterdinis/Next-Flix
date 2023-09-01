"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedFilms } from "@/api/movies/moviesRequests";
import Header from "@/components/shared/Header";
import { Film } from "@/types/moviesTypes";
import FilmCard from "./FilmCard";

const FilmsWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = usePaginatedFilms(pageIndex);

  return (
    <>
      <SecondNavbar />
      <Header title="Netflix Films" />
      <div className="flex flex-wrap justify-center mt-10">
        {data.results &&
          data.results.map((item: Film) => {
            return (
              <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
                <FilmCard
                  title={item.title}
                  poster_path={item.poster_path}
                  backdrop_path={item.backdrop_path}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FilmsWrapper;
