"use client";

import { FC, useState } from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import { usePaginatedFilms } from "@/api/movies/moviesRequests";


const FilmsWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const {data} = usePaginatedFilms(pageIndex);

  console.log(data);
  
  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">FILMS PAGE</section>
    </>
  );
};

export default FilmsWrapper;
