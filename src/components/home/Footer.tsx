import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <p>Get in touch!</p>
        <div className="flex gap-4 items-center">
          <Link className="hover:text-zinc-400 transition-all" href="">
            <InstagramLogo size={28} />
          </Link>
          <Link className="hover:text-zinc-400 transition-all" href="">
            <GithubLogo size={28} />
          </Link>
          <Link className="hover:text-zinc-400 transition-all" href="">
            <LinkedinLogo size={28} />
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Link
          className="underline hover:no-underline hover:text-zinc-400 transition-all"
          href="/"
        >
          Home
        </Link>
        |
        <Link
          className="underline hover:no-underline hover:text-zinc-400 transition-all"
          href="/portfolio"
        >
          Portfolio
        </Link>
        |
        <Link
          className="underline hover:no-underline hover:text-zinc-400 transition-all"
          href="/blog"
        >
          Blog
        </Link>
      </div>
      <p className="text-sm text-center">
        &copy; 2023 Raiyan. All rights reserved. Site designed by me (obvs).
      </p>
    </>
  );
};

export default Footer;
