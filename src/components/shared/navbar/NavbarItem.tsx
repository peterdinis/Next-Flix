import { FC } from "react";
import Link from "next/link";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  linkToPage: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, active, linkToPage }) => {
  return (
    <div
      className={
        active
          ? "text-white cursor-default"
          : "text-gray-200  hover:text-gray-300 cursor-pointer transition"
      }
    >
      <Link href={linkToPage}> {label}</Link>
    </div>
  );
};

export default NavbarItem;
