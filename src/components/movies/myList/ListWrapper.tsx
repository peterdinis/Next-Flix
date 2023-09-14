"use client";

import { FC, useState, useEffect } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import SecondHeader from "@/components/shared/SecondHeader";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { db } from "@/firebase";
import { Movie } from "@/types/moviesTypes";
import { collection } from "firebase/firestore";

const ListWrapper: FC = () => {
  const [myFilms, setMyFilms] = useState<Movie[] | null>(null);

  const myFilmsRef = collection(db, "customers", "myList");

  return (
    <>
      <SecondNavbar />
      <SecondHeader title="My Movie List" />
      <div className="text-white text-xl pt-4 font-thin">
        You don't have any movies in myList sections{" "}
        <SentimentDissatisfiedIcon />
      </div>
    </>
  );
};

export default ListWrapper;
