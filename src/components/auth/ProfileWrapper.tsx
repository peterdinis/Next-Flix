"use client";

import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { SecondNavbar } from "../shared";
import { ProfileInfo } from ".";

const ProfileWrapper: FC = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <SecondNavbar />
      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl text-white">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since {currentUser?.metadata.creationTime}
            </p>
          </div>
        </div>

        <ProfileInfo />
      </main>
    </>
  );
};

export default ProfileWrapper;
