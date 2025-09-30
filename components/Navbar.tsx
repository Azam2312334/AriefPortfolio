"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md border-b z-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Name */}
        <Link href="/" className="font-bold text-xl" onClick={closeMenu}>
          Arief Azam
        </Link>

        {/* Desktop Menu */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/"
                className="px-4 bg-white/90 hover:text-primary transition rounded-md"
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/projects"
                className="px-4 bg-white/90 hover:text-primary transition rounded-md"
              >
                Projects
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/about"
                className="px-4 bg-white/90 hover:text-primary transition rounded-md"
              >
                About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/contact"
                className="px-4 bg-white/90 hover:text-primary transition rounded-md"
              >
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-accent rounded-lg transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t bg-white/90 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="px-4 py-2 bg-white/90 hover:bg-accent rounded-lg transition"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 bg-white/90 hover:bg-accent rounded-lg transition"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-white/90 hover:bg-accent rounded-lg transition"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white/90 hover:bg-accent rounded-lg transition"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
