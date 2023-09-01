"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedFilms } from "@/api/movies/moviesRequests";
import { Film } from "@/types/moviesTypes";


const FilmsWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const {data} = usePaginatedFilms(pageIndex);

  console.log(data);
  
  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
      {data.results && data.results.map((item: Film) => {
        return (
          <>
            <h2>{item.name}</h2>
          </>
        )
       })}
      </section>
    </>
  );
};

export default FilmsWrapper;
