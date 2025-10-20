"use client";

import Link from "next/link";
import React from "react";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="text-2xl font-bold text-green-600 flex items-center gap-2 hover:text-green-700 transition-colors"
    >
      Hotel <span className="text-gray-700 md:text-gray-200">Devdaha</span>
    </Link>
  );
};

export default Logo;
