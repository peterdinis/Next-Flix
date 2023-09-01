"use client"

import { FC } from "react";
import SecondNavbar from "../../shared/navbar/SecondNavbar";
import SecondHeader from "@/components/shared/SecondHeader";


const ListWrapper: FC = () => {
  return (
    <>
      <SecondNavbar />
      <SecondHeader title="My List" />
    </>
  );
};

export default ListWrapper;
