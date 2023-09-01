"use client"

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedSeries } from "@/api/movies/moviesRequests";
import { Series } from "@/types/moviesTypes";

const SeriesWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const {data} = usePaginatedSeries(pageIndex);
  
  console.log(data);

  return (
    <>
      <SecondNavbar />
{/*       <section className="md:space-y-24 mt-4">
        {data.results && data.results.map((item: Series) => {
        return (
          <>
            <h2>{item.name}</h2>
          </>
        )
       })}
      </section> */}
      
    </>
  );
};

export default SeriesWrapper;