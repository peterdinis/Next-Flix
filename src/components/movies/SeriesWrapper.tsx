"use client"

import { FC, useState } from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import useSWR from "swr";
import { API_KEY, BASE_URL, fetcher } from "@/constants/applictionConstants";

const SeriesWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const url = `${BASE_URL}/tv/pouplar?api_key=${API_KEY}&language=en-US&page=${pageIndex}`;

  const {data, error, isLoading} = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  console.log("Data",data);

  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">

      </section>
    </>
  );
};

export default SeriesWrapper;
