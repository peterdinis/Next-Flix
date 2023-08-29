"use client";

import { useState, ChangeEvent, useRef, useEffect, FC } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/shared/Input";
import { useAuth } from "@/hooks/useAuth";

const PasswordResetForm: FC = () => {
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

  const registerUser = () => {
    register(credentials);
    router.push("/login");
  };
  return (
    <div className="relative h-full w-full bg-[url('/images/herohero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Reset Password</h2>
            <div className="flex flex-col gap-4">
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
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PasswordResetForm;