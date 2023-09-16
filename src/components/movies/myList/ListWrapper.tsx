"use client";

import { FC, useState, useEffect } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import SecondHeader from "@/components/shared/SecondHeader";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { db } from "@/firebase";
import { Movie } from "@/types/moviesTypes";
import { collection } from "firebase/firestore";
import NoFilms from "./NoFilms";

const ListWrapper: FC = () => {

  return (
    <>
      <SecondNavbar />
      <SecondHeader title="My Movie List" />
      <NoFilms />
    </>
  );
};

export default ListWrapper;
