"use client";

import Link from "next/link";
import React from "react";

interface LogoProps {
  isDrawer?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDrawer = false }) => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-green-600 flex items-center gap-2 hover:text-green-700 transition-colors"
    >
      Hotel{" "}
      <span className={isDrawer ? "text-black" : "text-gray-200"}>Devdaha</span>
    </Link>
  );
};

export default Logo;
