"use client";

import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

import React from "react";

const page = () => {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/dashboard",
      },
    });

    if (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#E7F3FF] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-r from-[#1877F2] to-[#0A66C2] rounded-b-[50%] z-0"></div>

      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={200}
          height={100}
          className="mb-6"
        />

        <h1 className="text-3xl font-bold text-[#0A66C2] text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-gray-500 text-center text-xl mb-6">
          Sign in to continue
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
          suppressHydrationWarning
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1877F2]"
          suppressHydrationWarning
        />

        <Button className="w-full bg-gray-300 text-gray-500 mb-4">Login</Button>

        <div className="flex items-center w-full mb-4">
          <hr className="grow border-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <hr className="grow border-gray-300" />
        </div>

        <Button
          className="w-full flex items-center  cursor-pointer justify-center gap-3 bg-[#0A66C2] text-white hover:bg-[#09418a] shadow-md transition-all"
          onClick={signInWithGoogle}
        >
          <FcGoogle size={24} /> Sign in with Google
        </Button>
      </div>

      <div className="absolute top-10 right-16 w-20 h-20 bg-[#0A66C2] rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-16 w-28 h-28 bg-[#1877F2] rounded-full opacity-20 animate-pulse-slow"></div>
    </div>
  );
};

export default page;
