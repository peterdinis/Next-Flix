"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedFilms } from "@/api/queries/movies/moviesRequests";
import { Film } from "@/types/moviesTypes";
import ScrollToTop from "react-scroll-to-top";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Loader from "@/components/shared/Loader";
import SecondHeader from "@/components/shared/SecondHeader";
import { TOTAL_FILMS_PAGE } from "@/constants/applictionConstants";

const FilmsWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(1);

  const { data, isFetching } = usePaginatedFilms(pageIndex);

  console.log(data);
  console.log(pageIndex);

  const goToNextPage = () => {
    if (pageIndex === 1) return;
    setPageIndex(pageIndex - 1);
  };

  const goToLastPage = () => {
    if (pageIndex === TOTAL_FILMS_PAGE) {
      return;
    }
    setPageIndex(pageIndex + 1);
  };

  return (
    <>
      <SecondNavbar />
      <ScrollToTop />
      <SecondHeader title="Netflix Films" />
      <div className="flex flex-wrap justify-center mt-10">
        {data.results &&
          data.results.map((item: Film) => {
            return (
              <div className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2">
                <div className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${
                      item.backdrop_path || item.poster_path
                    }`}
                    className="rounded-sm object-cover md:rounded"
                    alt={item.title}
                  />
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
        <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center pt-3 text-blue-50 hover:text-indigo-700 cursor-pointer">
            <button
              onClick={goToNextPage}
              className="text-sm ml-3 font-medium leading-none"
            >
              <ArrowBackIcon />
            </button>
          </div>
          <span className="flex items-center pt-3 text-blue-50 hover:text-indigo-700 cursor-pointer">
            Actual page: {pageIndex}
          </span>
          <div className="flex items-center pt-3 text-blue-50 hover:text-indigo-700 cursor-pointer">
            <button
              onClick={goToLastPage}
              className="text-sm font-medium leading-none mr-3"
            >
              <ArrowForwardIcon />
            </button>
          </div>
          {isFetching ? <Loader color="red" /> : null}
        </div>
      </div>
    </>
  );
};

export default FilmsWrapper;
