import React, { FC } from "react";

interface IPopularProps {
  backdrop_path: string;
  poster_path: string;
  title: string;
}

const PopularCard: FC<IPopularProps> = ({
  poster_path,
  backdrop_path,
  title
}: IPopularProps) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
        className="rounded-sm object-cover md:rounded"
        alt={title}
      />
    </div>
  );
};

export default PopularCard;
