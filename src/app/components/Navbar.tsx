"use client";
import { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <a
          href="#home"
          className="text-2xl font-bold text-green-600 flex items-center gap-2"
        >
          <i className="fas fa-spa"></i> Hotel{" "}
          <span className="text-gray-900">Devdaha</span>
        </a>
        <nav>
          <ul className="flex gap-6 text-sm font-semibold">
            {["Home", "About", "Kitchen", "Rooms", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
