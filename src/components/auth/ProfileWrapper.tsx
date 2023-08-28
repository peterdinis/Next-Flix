"use client";

import { FC } from "react";
import Link from "next/link";
import ProfileInfo from "./ProfileInfo";

const ProfileWrapper: FC = () => {
  return (
    <>
      <header className="header bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="netflix"
            width={120}
            height={120}
            className="cursor-pointer object-contain"
          />
        </Link>
        <Link href="/profile">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </header>
      <main className="pt-24 mx-auto max-w-6xl px-5 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl text-white">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">
            <img src="https://rb.gy/4vfk4r" alt="" className="h-7 w-7" />
            <p className="text-xs font-semibold text-[#555]">
              Member since {new Date().toString()}
            </p>
          </div>
        </div>
        
        <ProfileInfo />
      </main>
    </>
  );
};

export default ProfileWrapper;
