"use client"

import { FC } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";
import Link from "next/link";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: FC<AccountMenuProps> = ({ visible }: AccountMenuProps) => {

  const router = useRouter();
  const {logout, currentUser} = useAuth();

  const logoutUser = () => {
    logout();
    toast.success("Logout successfull");
    router.push("/login");
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img
            className="w-8 rounded-md"
            src="/images/default-blue.jpg"
            alt="Profile Image"
          />
          <p className="text-white text-sm group-hover/item:underline">
            <Link href="/profile">{currentUser!.email}</Link>
          </p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div
        onClick={logoutUser}
        className="px-3 text-center text-white text-sm hover:underline"
      >
        Sign out of Netflix
      </div>
    </div>
  );
};

export default AccountMenu;
