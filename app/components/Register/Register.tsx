"use client";
import Link from "next/link";
import React from "react";

const Register = () => {
  const [registerData, setRegisterData] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const registerSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !registerData.fullName ||
      !registerData.email ||
      !registerData.password
    ) {
      setError("Please fill all the fields");
      return;
    }

    alert(JSON.stringify(registerData));

    setRegisterData({
      fullName: "",
      email: "",
      password: "",
    });

    setError("");
  };

  return (
    <main className="h-[90vh] flex justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center border border-gray-600 p-4 sm:p-10 rounded-lg xl:w-[35%] lg:w-[60%] md:w-[60%] sm:w-[70%] w-[90%]">
        <h1 className="text-2xl">Register</h1>

        <form
          action="submit"
          onSubmit={registerSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="pl-2 py-2 sm:w-[48vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] w-[80vw] text-black outline-none rounded-md"
            name="fullName"
            value={registerData.fullName}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            className="pl-2 py-2 sm:w-[48vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] w-[80vw] text-black outline-none rounded-md"
            name="email"
            value={registerData.email}
            onChange={handleChange}
            autoComplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            className="pl-2 py-2 sm:w-[48vw] md:w-[50vw] lg:w-[35vw] xl:w-[30vw] w-[80vw] text-black outline-none rounded-md"
            name="password"
            value={registerData.password}
            onChange={handleChange}
            autoComplete="off"
          />

          <div className="flex justify-between items-center mt-3">
            <button className="bg-green-600 px-4 py-2 rounded-md hover:bg-green-700 duration-200">
              Register
            </button>

            <Link
              href={"/login"}
              className="text-sm text-green-400 hover:underline duration-200"
            >
              Already have an account?
            </Link>
          </div>
          <p className="text-red-500 rounded-md inline-block">{error}</p>
        </form>
      </div>
    </main>
  );
};

export default Register;
