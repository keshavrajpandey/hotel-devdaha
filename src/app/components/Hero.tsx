"use client";

import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen bg-[url('/img/home/home.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Enjoy Your Stay
        </h1>
        <p className="text-lg mb-6 drop-shadow-md">
          We give you a legendary welcome, when you come back
        </p>

        <Link
          href="/about-us"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full text-white font-semibold flex items-center gap-2 transition-colors"
        >
          <span>Read More</span>
          <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
