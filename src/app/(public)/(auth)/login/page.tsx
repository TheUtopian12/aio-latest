import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <section className="place-items-center space-y-10 w-96 h-max lg:w-[500px] py-16">
        <Image
          src={"/aio-logo_v2.svg"}
          alt="aio logo"
          priority
          width={100}
          height={100}
        />
        <p className=" text-xl font-bold text-white">Enter the 4-digit code</p>
        <input
          type="text"
          maxLength={4}
          placeholder="EX: 4387"
          className="flex input input-bordered input-secondary w-full max-w-xs text-center "
        />
        <button className="btn btn-secondary">Log In</button>
      </section>
    </div>
  );
};

export default Login;
