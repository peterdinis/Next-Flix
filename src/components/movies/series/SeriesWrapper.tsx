"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedSeries } from "@/api/queries/movies/moviesRequests";
import SerieCard from "./SerieCard";
import Header from "@/components/shared/Header";
import { Series } from "@/types/moviesTypes";
import ScrollToTop from "react-scroll-to-top";

const SeriesWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = usePaginatedSeries(pageIndex);

  return (
    <>
      <SecondNavbar />
      <ScrollToTop />
      <Header title="Netflix Series" />
      <div className="flex flex-wrap justify-center mt-10">
        {data.results &&
          data.results.map((item: Series) => {
            return (
              <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
                <SerieCard
                  name={item.name}
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

export default SeriesWrapper;
