"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center h-[90vh] gap-4">
      <div className="border border-gray-600 lg:w-[40vw] md:w-[50vw] xl:w-[30vw] h-[15vh] md:h-[18vh] rounded-xl p-6 flex flex-col justify-center gap-2">
        <p className="sm:text-lg text-sm">
          Email: &nbsp; <span>developer.subigya@gmail.com</span>
        </p>
        <p className="sm:text-lg text-sm">
          Name: &nbsp; <span>Subigya Subedi</span>
        </p>
      </div>

      <button
        onClick={() => {
          router.push("/register");
        }}
        className="inline-block bg-red-500 hover:bg-red-600 duration-200 px-4 py-2 rounded-md"
      >
        Logout
      </button>
    </main>
  );
};

export default Dashboard;
