"use client"

import Hero from "@/components/home/Hero";
import PrivateRoute from "@/routes/PrivateRoute";
import { NextPage } from "next";

const Homepage: NextPage = () => {
  return <Hero />
}

export default PrivateRoute(Homepage);