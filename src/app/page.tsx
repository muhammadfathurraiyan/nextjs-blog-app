import Image from "next/image";
import Foto from "../../public/foto.jpg";
import Link from "next/link";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="absolute w-full top-10 min-h-screen grid grid-cols-3">
      <div className="col-span-2 grid grid-rows-2 ">
        <div className="grid grid-cols-2">
          <div className="border-r border-zinc-100 p-2 flex flex-col justify-center">
            <h1 className="text-5xl uppercase font-medium">
              Muhammad Fathur Raiyan
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-zinc-100" />
              <p>Web Developer</p>
            </div>
          </div>
          <div>
            <Image src={Foto} alt="profile" width={0} height={0} />
          </div>
        </div>
        <div className="border-t border-zinc-100"></div>
      </div>
      <div className="grid grid-rows-4">
        <div className="row-span-3 border-l border-zinc-100"></div>
        <div className="border-l border-t border-zinc-100 p-4 flex flex-col items-center justify-center">
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
        </div>
      </div>
    </main>
  );
}
