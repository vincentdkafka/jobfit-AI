"use client";
import { useUser } from "@/app/Provider";
import Image from "next/image";
import React from "react";

const WelcomeContainer = () => {
  const { user } = useUser();
  return (
    <div className="bg-white p-5 rounded-2xl flex justify-between items-center">
      <div >
        <h2 className="text-lg font-bold">Welcome back {user?.name}</h2>

        <h2 className="text-gray-500">You Job preparation place with power of AI</h2>
      </div>

      {user &&  <Image
      src={user?.picture}
      alt="userpicture"
      width={40}
      height={40}
      className="rounded-full"/>}
   
    </div>
  );
};

export default WelcomeContainer;
