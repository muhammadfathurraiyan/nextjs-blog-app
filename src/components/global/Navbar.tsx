"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="z-10 py-2 px-8 fixed top-0 w-full left-0 flex items-center justify-between bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-100">
      <h1 className="text-zinc-100 font-medium">Raiyan.</h1>
      <div className="flex items-center gap-4 text-zinc-400">
        <Link
          href="/"
          className={`hover:text-white duration-300 ${path === "/" && "text-white"}`}
        >
          Home
        </Link>
        <Link
          href="/portfolio"
          className={`hover:text-white duration-300 ${path === "/blog" && "text-white"}`}
        >
          Portfolio
        </Link>
        <Link
          href="/about"
          className={`hover:text-white duration-300 ${path === "/about" && "text-white"}`}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}
