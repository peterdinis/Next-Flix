"use client";

import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";

const ProfileInfo: FC = () => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg text-[gray]">Account Info</h4>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div className="">
            <p className="font-medium text-blue-50">Email: {currentUser?.email}</p>
            <p className="font-medium text-blue-50 mt-4">Account Created at: {currentUser?.metadata.creationTime}</p>
            <p className="font-medium text-blue-50 mt-4">Last Login at: {currentUser?.metadata.lastSignInTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
