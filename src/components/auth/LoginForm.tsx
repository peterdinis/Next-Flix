"use client";

import { useState, ChangeEvent, FC } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import Cookie from "js-cookie";

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

  /* TODO: Operation work but later update this logic */
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
                <svg
                  className="mr-2 -ml-1 w-4 h-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
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
