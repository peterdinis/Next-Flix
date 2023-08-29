"use client";

import { useAuth } from "@/hooks/useAuth";
import { FC } from "react";

const ProfileInfo: FC = () => {
  const { currentUser } = useAuth();

  return (
    <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="space-y-2 py-4">
        <h4 className="text-lg text-[gray]">Membership &amp; Billing</h4>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between border-b border-white/10 py-4 md:flex-row">
          <div className="">
            <p className="font-medium text-blue-50">{currentUser?.email}</p>
            <p className="text-blue-50">Password: ********</p>
          </div>
          <div className="md:text-right">
            <p className="membershipLink">Change password</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
