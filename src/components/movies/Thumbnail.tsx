import { FC } from "react";
import { DocumentData } from "firebase/firestore";
import React from "react";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "@/store/atoms/modalAtom";
import { Movie } from "@/types/moviesTypes";

interface ThumbnailProps {
  movie: Movie | DocumentData;
}

const Thumbnail: FC<ThumbnailProps> = ({ movie }: ThumbnailProps) => {
  const [showModal, setShowModal] = useRecoilState(modalState);
  const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
      onClick={() => {
        setShowModal(true);
        setCurrentMovie(movie);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        alt={movie.name}
      />
    </div>
  );
};

export default Thumbnail;
