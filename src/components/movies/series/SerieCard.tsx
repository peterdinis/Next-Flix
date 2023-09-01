import React, { FC } from "react";

interface ISerieProps {
  backdrop_path: string;
  poster_path: string;
  name: string;
}

const SerieCard: FC<ISerieProps> = ({
  poster_path,
  backdrop_path,
  name,
}: ISerieProps) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
        className="rounded-sm object-cover md:rounded"
        alt={name}
      />
    </div>
  );
};

export default SerieCard;