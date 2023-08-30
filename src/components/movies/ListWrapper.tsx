"use client"

import { FC } from "react";
import SecondNavbar from "../shared/navbar/SecondNavbar";
import Header from "../shared/Header";


const ListWrapper: FC = () => {
  return (
    <>
      <SecondNavbar />
      <Header title="My List" />
      <section className="md:space-y-24 mt-4">
      </section>
    </>
  );
};

export default ListWrapper;
