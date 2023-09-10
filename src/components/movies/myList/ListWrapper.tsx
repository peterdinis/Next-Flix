"use client";

import { FC } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import SecondHeader from "@/components/shared/SecondHeader";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";

const ListWrapper: FC = () => {
  return (
    <>
      <SecondNavbar />
      <SecondHeader title="My List" />
      <div className="text-white text-xl pt-4 font-thin">
        You don't have any movies in myList sections{" "}
        <SentimentDissatisfiedIcon />
      </div>
    </>
  );
};

export default ListWrapper;
