"use client"

import { FC, useCallback, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import NavbarItem from "./NavbarItem";
import MobileMenu from "../menu/MobileMenu";
import AccountMenu from "../menu/AccountMenu";
import { TOP_OFFSET } from "@/constants/applictionConstants";
import Link from "next/link";

const Navbar: FC = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Link href="/">
          <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
        </Link>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavbarItem linkToPage="/" label="Home" active />
          <NavbarItem linkToPage="/series" label="Series" />
          <NavbarItem linkToPage="/films" label="Films" />
          <NavbarItem linkToPage="/new-popular" label="New & Popular" />
          <NavbarItem linkToPage="/list" label="My List" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <IoMdArrowDropdown
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.jpg" alt="" />
            </div>
            <IoMdArrowDropdown
              className={`w-4 text-white fill-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
