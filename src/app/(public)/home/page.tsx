import Image from "next/image";
import Link from "next/link";
import React from "react";
const backgroundImage = "/poster/M1.png";
const Home = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center absolute bottom-20">
        <div className="max-w-md">
          <section className="flex justify-center items-center">
            <Image
              src={"/aio-logo_v2.svg"}
              alt="aio logo"
              priority
              width={100}
              height={100}
            />
          </section>
          <p className="my-5 text-xl font-bold text-white">
            Enjoy the Best <span className="text-secondary">Movies</span> and{" "}
            <span className="text-secondary">TV Shows</span>
          </p>
          <Link href={"/login"}>
            <button className="btn btn-secondary text-black">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
