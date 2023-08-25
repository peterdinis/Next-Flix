"use client"

import { FC, useCallback, useState } from "react";
import Input from "../shared/Input";
import Link from "next/link";
import axios from "axios";

const RegisterForm: FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email
      })
    } catch(errror) {

    }
  }, [])

  return (
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img className="h-12" src="/images/logo.png" alt="Next-Flix logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-mg w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Register</h2>
            <div className="flex flex-col gap-4">
            <form>
                <Input id={"Email"} value={"Email"} label={"Email"} onChange={() => {}} />  <br />
                <Input id={"Password"} value={"Password"} label={"Password"} onChange={() => {}} />
                <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 :hover-bg-red-700 transition">Login</button>
              </form>
              <p className="text-neutral-500 mt-12">
                First time using NextFlix
              </p>
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Login: <Link href="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;