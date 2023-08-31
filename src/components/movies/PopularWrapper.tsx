"use client"

import { FC, useState} from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import { usePaginatedPopular } from "@/api/movies/moviesRequests";

const PopularWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const {data} = usePaginatedPopular(pageIndex);

  console.log(data);
  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
          Popular
      </section>
    </>
  );
};

export default PopularWrapper;
