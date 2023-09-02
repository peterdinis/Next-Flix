import dynamic from "next/dynamic";

export const LoginForm = dynamic(() => import("./LoginForm"));
export const ProfileInfo = dynamic(() => import("./ProfileInfo"));
export const ProfileWrapper = dynamic(() => import("./ProfileWrapper"));
export const RegisterForm = dynamic(() => import("./RegisterForm"));