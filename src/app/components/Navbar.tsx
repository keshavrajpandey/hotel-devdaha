"use client";

import { useEffect, useState } from "react";
import { Drawer, Button, Group, Flex } from "@mantine/core";
import { Menu } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [mounted, setMounted] = useState(false); // Fix hydration

  const navItems = ["Home", "About", "Kitchen", "Rooms", "Contact"];

  useEffect(() => {
    setMounted(true); // mark client mounted
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null; // Prevent server/client mismatch

  return (
    <header
      className={`fixed w-full z-50 transition ${
        scrolled ? "bg-[#333333] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-green-600 flex items-center gap-2"
        >
          Hotel <span className="text-gray-200">Devdaha</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-sm font-semibold">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button
            variant="subtle"
            onClick={open}
            className="p-0 text-gray-900"
          >
            <Menu size={28} />
          </Button>

          
        </div>
        {/* Mobile Drawer */}
          <Drawer
            opened={opened}
            onClose={close} // fix here
            title="Menu"
            padding="md"
            size="xs"
           
    
            
          >
            <Flex direction="column" h="100%" >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-900 font-semibold hover:text-green-600 block"
                  onClick={close} // close drawer on click
                >
                  {item}
                </a>
              ))}
            </Flex>
          </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
