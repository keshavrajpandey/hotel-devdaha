"use client";

import React from "react";
import { Utensils, Hotel, Dumbbell, BedDouble } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <Utensils className="w-10 h-10 text-green-600 mb-4" />,
      title: "Great Meals",
      desc: "Savor the perfect meal, crafted with care and served with a smile.",
    },
    {
      icon: <Hotel className="w-10 h-10 text-green-600 mb-4" />,
      title: "Great Location",
      desc: "Your next favorite memory is waiting just around the corner.",
    },
    {
      icon: <BedDouble className="w-10 h-10 text-green-600 mb-4" />,
      title: "Elevate Services",
      desc: "Your personal sanctuary for strength and serenity awaits.",
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
