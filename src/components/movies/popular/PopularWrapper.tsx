"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedPopular } from "@/api/queries/movies/moviesRequests";
import Header from "@/components/shared/Header";
import { Popular } from "@/types/moviesTypes";
import PopularCard from "./PopularCard";

const PopularWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = usePaginatedPopular(pageIndex);

  return (
    <>
      <SecondNavbar />
      <Header title="Netflix popular" />
      <div className="flex flex-wrap justify-center mt-10">
        {data.results &&
          data.results.map((item: Popular) => {
            return (
              <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
                <PopularCard
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

export default PopularWrapper;
