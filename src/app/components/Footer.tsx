"use client";

import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Hotel Devdaha
          </h3>
          <p>
            Experience comfort and luxury at the heart of Kathmandu. Our mission
            is to make your stay memorable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2">
            {["Home", "About", "Kitchen", "Rooms", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-green-400 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/p/HOTEL-Devdaha-100068146331545/"
              aria-label="Facebook"
              className="hover:text-green-400 transition"
              target="_blank"
            >
              <Image
                alt="facebook"
                width={100}
                height={100}
                src="/img/footer/facebook.png"
                className="w-10"
              />
            </a>
            <a
              href="https://www.instagram.com/hotel_devdaha/"
              aria-label="Instagram"
              className="hover:text-green-400 transition"
              target="_blank"
            >
              <Image
                alt="instagram"
                width={100}
                height={100}
                src="/img/footer/instagram.png"
                className="w-10"
              />
            </a>
            <a
              href="https://www.tiktok.com/@hoteldevdaharestaurant"
              aria-label="Twitter"
              className="hover:text-green-400 transition"
            >
              <Image
                alt="tik-tok"
                width={100}
                height={100}
                src="/img/footer/tik-tok.png"
                className="w-10"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Hotel Devdaha & Restaurant. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
