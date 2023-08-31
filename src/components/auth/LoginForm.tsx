"use client";

import { useState, ChangeEvent, FC } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import Cookie from "js-cookie";
import GoogleIcon from '@mui/icons-material/Google';

const LoginForm: FC = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { login, signInWithGoogle } = useAuth();

  const loginUser = async () => {
    try {
      await login(credentials);
      Cookie.set("userCredentials", JSON.stringify(credentials));
      toast.success("Login was successful");
      router.push("/watch");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please check your credentials.");
      router.push("/login");
    }
  };

  const loginWithGoogle = async () => {
    signInWithGoogle();
    setTimeout(() => {
      router.push("/profile");
    }, 10000);
  };

  return (
    <div className="relative h-full w-full bg-[url('/images/herohero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Login</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="email"
                type="email"
                label="Email address"
                value={credentials.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
              <Input
                type="password"
                id="password"
                label="Password"
                value={credentials.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />
            </div>
            <button
              onClick={loginUser}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              Login
            </button>
            <p className="text-neutral-500 mt-12">
              No account
              <span className="text-white ml-1 hover:underline cursor-pointer">
                <Link href="/register">Register here</Link>
              </span>
              .
            </p>
            <p className="mt-12">
              <button
                onClick={loginWithGoogle}
                type="button"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
              >
                <GoogleIcon className="mr-2 -ml-1 w-4 h-4" />
                Sign in with Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
