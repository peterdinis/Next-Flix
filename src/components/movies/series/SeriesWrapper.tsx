"use client";

import { FC, useState } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import { usePaginatedSeries } from "@/api/movies/moviesRequests";
import FeatureCard from "./SerieCard";
import Header from "@/components/shared/Header";

const SeriesWrapper: FC = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const { data } = usePaginatedSeries(pageIndex);

  console.log(data);

  return (
    <>
      <SecondNavbar />
      <Header title="Netflix Series" />
      <div className="flex flex-wrap justify-center mt-10">
        <FeatureCard
          title="Feature 1"
          description="Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
        />
        <FeatureCard
          title="Feature 2"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
        <FeatureCard
          title="Feature 3"
          description="Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet nihil molestias. Rem perspiciatis iure ut laborum inventore et maxime amet."
        />
      </div>
    </>
  );
};

export default SeriesWrapper;
