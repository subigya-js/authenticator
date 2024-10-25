"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <main className="flex flex-col justify-center items-center h-[90vh] gap-4">
      <div className="border border-gray-600 w-[30vw] h-[20vh] rounded-xl p-4 flex flex-col justify-center gap-2">
        <p className="text-lg">
          Email: &nbsp; <span>developer.subigya@gmail.com</span>
        </p>
        <p className="text-lg">
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
