"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full border-b z-[999] navbar-bg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Name */}
        <Link
          href="/"
          className="font-bold text-xl text-gray-900 dark:text-white"
          onClick={closeMenu}
        >
          Arief Azam
        </Link>

        {/* Desktop Menu + Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  href="/"
                  className="px-4 bg-transparent text-gray-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition rounded-md"
                >
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/projects"
                  className="px-4 bg-transparent text-gray-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition rounded-md"
                >
                  Projects
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/about"
                  className="px-4 bg-transparent text-gray-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition rounded-md"
                >
                  About
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/contact"
                  className="px-4 bg-transparent text-gray-900 dark:text-white hover:text-primary dark:hover:text-gray-300 transition rounded-md"
                >
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle Button - Desktop */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 backdrop-blur-md border dark:border-white/20 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          )}
        </div>

        {/* Mobile: Menu Button + Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          {/* Theme Toggle Button - Mobile */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 backdrop-blur-md border dark:border-white/20 transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition backdrop-blur-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-gray-900 dark:text-white" />
            ) : (
              <Menu size={24} className="text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t navbar-bg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="px-4 py-2 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 rounded-lg transition backdrop-blur-md border dark:border-white/20"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 rounded-lg transition backdrop-blur-md border dark:border-white/20"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="px-4 py-2 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 rounded-lg transition backdrop-blur-md border dark:border-white/20"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 bg-gray-50 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/20 rounded-lg transition backdrop-blur-md border dark:border-white/20"
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
