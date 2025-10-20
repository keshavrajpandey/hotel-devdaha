"use client";

import React, { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

const Kitchen: React.FC = () => {
  const images = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section id="kitchen" className="py-20 bg-white text-center">
      <h4 className="text-green-600 font-semibold">Our Kitchen</h4>
      <h2 className="text-3xl font-bold mb-4">
        What would you like us to prepare?
      </h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-10">
        The hotel provides a delicious restaurant meal to satisfy and nourish
        your stay.
      </p>

      <div className="max-w-6xl mx-auto px-6">
        <Carousel
          withIndicators
          slideSize={{ base: "100%", sm: "33.33%", md: "25%" }}
          slideGap={{ base: 0, sm: "md" }}
          emblaOptions={{ loop: true, align: "start" }}
        >
          {images.map((num) => (
            <Carousel.Slide key={num}>
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src={`/img/kitchen/food-${num}.jpg`}
                  alt={`Food ${num}`}
                  width={100}
                  height={100}
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Kitchen;
