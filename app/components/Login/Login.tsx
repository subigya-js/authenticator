"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  });

  const [error, setError] = React.useState("");

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setError("Please fill all the fields");
      return;
    }

    alert(JSON.stringify(loginData));

    setLoginData({
      email: "",
      password: "",
    });

    setError("");

    router.push("/dashboard");
  };

  return (
    <main className="h-[90vh] flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center border border-gray-600 p-4 sm:p-10 rounded-lg xl:w-[35%] lg:w-[60%] md:w-[60%] sm:w-[70%] w-[90%]">
        <h1 className="text-2xl">Login</h1>

        <form
          action="submit"
          onSubmit={loginSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="email"
            placeholder="Email"
            className="pl-2 py-2 sm:w-[48vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] w-[80vw] text-black outline-none rounded-md"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            className="pl-2 py-2 sm:w-[48vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] w-[80vw] text-black outline-none rounded-md"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            autoComplete="off"
          />

          <div className="flex justify-between items-center mt-3">
            <button className="bg-green-600 px-6 py-2 rounded-md hover:bg-green-700 duration-200">
              Login
            </button>

            <Link
              href={"/register"}
              className="text-sm text-green-400 hover:underline duration-200"
            >
              Create a new account?
            </Link>
          </div>
          <p className="text-red-500 rounded-md inline-block">{error}</p>
        </form>
      </div>
    </main>
  );
};

export default Login;
