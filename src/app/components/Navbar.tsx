"use client";

import { useEffect, useState } from "react";
import { Drawer, Button, Flex } from "@mantine/core";
import { Menu } from "lucide-react";
import { useDisclosure } from "@mantine/hooks";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Kitchen", id: "kitchen" },
    { label: "Rooms", id: "rooms" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  // 👇 Function to handle navigation + smooth scroll
  const handleNavClick = (id: string) => {
    close(); // close drawer if open

    if (pathname === "/") {
      // Already on home page → smooth scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Not on home → redirect and then scroll
      router.push(`/#${id}`);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition ${
        scrolled ? "bg-[#333333] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-sm font-semibold">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-green-600 text-gray-200 transition"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button
            variant="subtle"
            onClick={open}
            className="p-0  text-gray-200"
          >
            <Menu size={28} className="text-green-600" />
          </Button>
        </div>

        {/* Drawer for Mobile */}
        <Drawer
          opened={opened}
          onClose={close}
          title={<Logo isDrawer />}
          padding="md"
          size="xs"
          styles={{
            content: { backgroundColor: "#f9f9f9" },
          }}
        >
          <Flex direction="column" gap="md" h="100%">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-gray-900 font-semibold hover:text-green-600 rounded-md p-2 hover:bg-green-400/20 text-left"
              >
                {item.label}
              </button>
            ))}
          </Flex>
        </Drawer>
      </div>
    </header>
  );
};

export default Navbar;
