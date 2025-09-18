"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {

    return (
 <header className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Name */}
        <Link href="/" className="font-bold text-xl">
          Arief Azam
        </Link>

        {/* Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" className="px-4">
                 Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/projects" className="px-4">
                 Projects
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" className="px-4">
                 About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" className="px-4">
                 Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
    )
}
