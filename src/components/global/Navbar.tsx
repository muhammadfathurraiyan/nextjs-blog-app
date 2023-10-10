"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  return (
    <nav className="py-4 px-24 flex items-center justify-between border-b border-b-slate-400">
      <h1>Logo</h1>
      <div className="flex items-center gap-4 text-slate-400">
        <Link
          href="/"
          className={`hover:text-white ${path === "/" && "text-white"}`}
        >
          Home
        </Link>
        <Link
          href="/blog"
          className={`hover:text-white ${path === "/blog" && "text-white"}`}
        >
          Blog
        </Link>
        <Link
          href="/about"
          className={`hover:text-white ${path === "/about" && "text-white"}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
}
