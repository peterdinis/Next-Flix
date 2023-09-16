"use client";

import { FC, useState, useEffect } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import SecondHeader from "@/components/shared/SecondHeader";
import NoFilms from "./NoFilms";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

const ListWrapper: FC = () => {
  const [myMoviesInList, setMyMoviesInList] = useState<any>();

  useEffect(() => {
    const q = query(collection(db, "customers"));
    onSnapshot(q, (querySnapshot) => {
      setMyMoviesInList(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <SecondNavbar />
      <SecondHeader title="My Movie List" />
      {myMoviesInList.length === 0 ? <NoFilms /> : <>SOME CONTENT</>}
    </>
  );
};

export default ListWrapper;
