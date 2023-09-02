"use client"

import {FC} from "react";

interface NavbarItemProps {
  label: string;
  active?: boolean;
  href: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ label, active, href }) => {
  return (
    <div className={active ? 'text-white cursor-default' : 'text-gray-200 font-bold hover:text-gray-300 cursor-pointer transition'}>
      <a href={href}> {label}</a>
    </div>
  )
}

export default NavbarItem;