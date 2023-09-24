"use client";

import { useState, ChangeEvent, FC } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-hot-toast";
import Cookie from "js-cookie";
import { Input } from "../shared";
import logo from "../../../public/images/logo.png"
import Image from "next/image";

const LoginForm: FC = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

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

  return (
    <div className="relative h-full w-full bg-[url('/images/mainhero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image height={50} src={logo} className="h-12" alt="Logo" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
