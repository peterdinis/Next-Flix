import { FC, useCallback } from "react";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as api from "@/api/queries/userQueries";
import { useQuery } from "@tanstack/react-query";
import FallbackLoader from "../shared/Loader";
import ErrorMessage from "../shared/Error";

const images = [
  "/images/default-blue.jpg",
  "/images/default-purple.jpg",
  "/images/default-red.jpg",
  "/images/default-slate.jpg",
];

interface UserCardProps {
  name: string;
}

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

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  return (
    <div className="group flex-row w-44 mx-auto">
      <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
        <img
          draggable={false}
          className="w-max h-max object-contain"
          src={imgSrc}
          alt=""
        />
      </div>
      <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
        {name}
      </div>
    </div>
  );
};

const ProfileWrapper: FC = () => {
  const router = useRouter();
  const {data, isLoading, isError} = useQuery(["currentUser"], api.getCurrentUser); 

  if(isLoading) {
    return <FallbackLoader />
  }

  if(isError) {
    return <ErrorMessage error={"Something went wrong"} />
  }

  console.log("User data", data);

  const selectProfile = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => selectProfile()}>
            <UserCard name="USER" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileWrapper;
