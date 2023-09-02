import dynamic from "next/dynamic";

export const SecondHeader = dynamic(() => import("./SecondHeader"));
export const SearchDropdown = dynamic(() => import("./SearchDropdown"));
export const NotFound = dynamic(() => import("./NotFound"));
export const Loader = dynamic(() => import("./Loader"));
export const Input = dynamic(() =>import("./Input"));
export const Header = dynamic(() => import("./Header"));