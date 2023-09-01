"use client"

import { FC, useState} from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedPopular } from "@/api/movies/moviesRequests";
import { Popular } from "@/types/moviesTypes";

const PopularWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const {data} = usePaginatedPopular(pageIndex);

  console.log(data);
  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
      {data.results && data.results.map((item: Popular) => {
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

export default PopularWrapper;
