"use client"

import { FC, useState, useRef, useEffect } from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import useSWR from "swr";
import { API_KEY, BASE_URL, fetcher } from "@/constants/applictionConstants";

const SeriesWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const url = `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${pageIndex}`;

  const { data, error } = useSWR(url, fetcher);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver: IntersectionObserverCallback = ([entry]) => {
    if (entry.isIntersecting && data && data.page < data.total_pages) {
      setPageIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [data]);

  if (error) return <div>failed to load</div>;

  return (
    <>
      <SecondNavbar />
      <section className="md:space-y-24 mt-4">
        {data?.results && data?.results.map((item: any) => {
          return (
            <h2>{item.name}</h2>
          )
        })}
        <div ref={containerRef}></div>
      </section>
    </>
  );
};

export default SeriesWrapper;