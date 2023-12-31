"use client";

import { FC, useState, useRef } from "react";
import { DocumentData } from "firebase/firestore";
import { Movie } from "@/types/moviesTypes";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Thumbnail } from ".";
import { Header } from "../shared";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
interface IMovieRowProps {
  title: string;
  movies: Movie[] | DocumentData[] | any;
}

const MovieRow: FC<IMovieRowProps> = ({ title, movies }: IMovieRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <Header title={title} />
      <div className="group relative md:-ml-2">
        <ArrowLeftIcon
          className={`absolute  top-0 text-blue-50 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${
            !isMoved && "hidden"
          }`}
          onClick={() => handleClick("left")}
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.results &&
            movies.results.map((movie: { id: string | number }) => (
              <Thumbnail key={movie.id} movie={movie} />
            ))}
        </div>

        <ArrowRightIcon
          className={`absolute top-0 bottom-0 text-blue-50 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default MovieRow;
