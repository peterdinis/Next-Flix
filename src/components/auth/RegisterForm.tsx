"use client";

import { useState, ChangeEvent, useRef, useEffect, FC } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import {toast} from "react-hot-toast";

const RegisterForm: FC = () => {
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { register } = useAuth();

  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const registerUser = async () => {
    try {
      await register(credentials);
      toast.success("Registration was successful");
      router.push("/login");
    } catch (error) {
      console.error("Register error:", error);
      toast.error("Register failed");
      router.push("/register");
    }
  };
  return (
    <div className="relative h-full w-full bg-[url('/images/herohero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Register</h2>
            <div className="flex flex-col gap-4">
              <Input
                id="email"
                type="email"
                label="Email address or phone number"
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
              onClick={registerUser}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              Register
            </button>
            <p className="text-neutral-500 mt-12">
              Already have an account?
              <span className="text-white ml-1 hover:underline cursor-pointer">
               <Link href="/login"> Login</Link>
              </span>
              .
            </p>
            <div className="mt-4">
              <p className="text-neutral-500 mt-12">
                Forgot Password ?
                <span className="text-white ml-1 hover:underline cursor-pointer">
                  <Link href="/password-reset">Create new password here</Link>
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default RegisterForm;