import { FC } from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import useInfoModalStore from "@/zustand/modalStore";

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
  return <></>;
};

export default Hero;
