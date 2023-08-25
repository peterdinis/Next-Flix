"use client"

import { FC } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useInfoModalStore from "@/zustand/modalStore";
import Navbar from "../shared/navbar/Navbar";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Hero: FC = () => {
  const { isOpen, closeModal } = useInfoModalStore();
  return (
    <>
      <Navbar />
    </>
  )
};

export default Hero;
