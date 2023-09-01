"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedSeries } from "@/api/queries/movies/moviesRequests";
import { Series } from "@/types/moviesTypes";
import ScrollToTop from "react-scroll-to-top";
import SecondHeader from "@/components/shared/SecondHeader";

const SeriesWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = usePaginatedSeries(pageIndex);

  return (
    <>
      <SecondNavbar />
      <ScrollToTop />
      <SecondHeader title="Netflix Series" />
      <div className="flex flex-wrap justify-center mt-10">
        {data.results &&
          data.results.map((item: Series) => {
            return (
              <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
                <div className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      item.backdrop_path || item.poster_path
                    }`}
                    className="rounded-sm object-cover md:rounded"
                    alt={item.name}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default SeriesWrapper;
