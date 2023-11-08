"use client";
import Image from "next/image";
import Foto from "../../../public/foto.jpg";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import {
  Article,
  Briefcase,
  Envelope,
  Gear,
  GithubLogo,
  House,
  InstagramLogo,
  LinkedinLogo,
  List,
  UserCircle,
  XCircle,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const path = usePathname();
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="sm:hidden fixed flex items-center justify-between z-10 top-0 left-0 px-4 py-2 border-b border-neutral-700 bg-neutral-900 w-full">
        <div className="flex flex-col">
          <h1 className="text-sm font-medium">M. Fathur Raiyan</h1>
          <p className="text-xs">Web Developer</p>
        </div>
        <button onClick={handleToggle} className="p-1 bg-neutral-800 rounded-md border border-neutral-700 cursor-pointer">
          <List size={20} />
        </button>
      </nav>
      {toggle && (
        <aside className="fixed z-10 inset-y-0 border-r border-neutral-700 bg-neutral-900 flex flex-col gap-4 p-8">
          <button className="hidden absolute top-5 right-5"><XCircle size={20} /></button>
          <div className="flex items-center gap-2 p-2 text-neutral-50">
            <Image
              className="rounded-full"
              src={Foto}
              alt="profile"
              width={60}
              height={70}
            />
            <div className="flex flex-col">
              <h1 className="text-sm font-medium">M. Fathur Raiyan</h1>
              <p className="text-xs">Web Developer</p>
            </div>
          </div>
          <div>
            <ul className="text-xs">
              <li>
                <Link
                  className={`flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50 rounded-md ${
                    path === "/" &&
                    "bg-neutral-800 border border-neutral-700 text-neutral-50"
                  }`}
                  href="/"
                >
                  <House size={18} /> Home
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50 rounded-md ${
                    path === "/about" &&
                    "bg-neutral-800 border border-neutral-700 text-neutral-50"
                  }`}
                  href="/about"
                >
                  <UserCircle size={18} /> About
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50 rounded-md ${
                    path === "/portfolio" &&
                    "bg-neutral-800 border border-neutral-700 text-neutral-50"
                  }`}
                  href="/portfolio"
                >
                  <Briefcase size={18} /> Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50 rounded-md ${
                    path === "/techstack" &&
                    "bg-neutral-800 border border-neutral-700 text-neutral-50"
                  }`}
                  href="/techstack"
                >
                  <Gear size={18} /> Tech Stack
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50 rounded-md ${
                    path === "/article" &&
                    "bg-neutral-800 border border-neutral-700 text-neutral-50"
                  }`}
                  href="/article"
                >
                  <Article size={18} /> Article
                </Link>
              </li>
              <li>
                <Link
                  className={`flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50 rounded-md ${
                    path === "/contact" &&
                    "bg-neutral-800 border border-neutral-700 text-neutral-50"
                  }`}
                  href="/contact"
                >
                  <Envelope size={18} /> Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-xs">
              <li className="p-2">Get in touch!</li>
              <li>
                <Link
                  className="flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50"
                  target="_blank"
                  href="https://www.instagram.com/muhammadfathurraiyan/"
                >
                  <InstagramLogo size={18} /> Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50"
                  target="_blank"
                  href="https://github.com/muhammadfathurraiyan"
                >
                  <GithubLogo size={18} /> Github
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center gap-2 p-2 text-neutral-400  hover:text-neutral-50"
                  target="_blank"
                  href="https://www.linkedin.com/in/muhammadfathurraiyan/"
                >
                  <LinkedinLogo size={18} />
                  Linkedin
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
