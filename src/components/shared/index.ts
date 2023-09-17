import dynamic from "next/dynamic";

export const SecondHeader = dynamic(() => import("./SecondHeader"));
export const NotFound = dynamic(() => import("./NotFound"));
export const Loader = dynamic(() => import("./Loader"));
export const Input = dynamic(() =>import("./Input"));
export const Header = dynamic(() => import("./Header"));
export const Error = dynamic(() => import("./Error"));
export const CustomErrorBoundary = dynamic(() => import("./CustomErrorBoundary"));
export const Navbar = dynamic(() => import("./navbar/Navbar"));
export const SecondNavbar = dynamic(() => import("./navbar/SecondNavbar"));
export const AccountMenu = dynamic(() => import("./menu/AccountMenu"));
export const MobileMenu = dynamic(() => import("./menu/MobileMenu"));