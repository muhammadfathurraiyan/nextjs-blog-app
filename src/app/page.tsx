"use client";
import { Envelope, Link as LinkIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center px-24 max-lg:px-4 gap-2">
      <div>
        <h1 className="text-4xl max-lg:text-3xl font-semibold">
          Hi, I am Raiyan
        </h1>
        <TypeAnimation
          sequence={[
            "I do code.",
            1000,
            "I play guitar.",
            1000,
            "I love adventure.",
            1000,
            "I am a dreamer.",
            1000,
          ]}
          speed={50}
          className="text-3xl max-lg:text-2xl font-semibold"
          repeat={Infinity}
        />
      </div>
      <div className="flex gap-2">
        <Link
          className="flex items-center gap-2 p-2 bg-neutral-800 hover:bg-neutral-800/80 border border-neutral-700 text-neutral-50 rounded-md transition-all"
          href="/contact"
        >
          <Envelope size={18} /> Contact
        </Link>
        <span className="flex items-center gap-2 p-2 hover:bg-neutral-800 border border-neutral-700 text-neutral-50 rounded-md transition-all">
          <LinkIcon size={18} /> Email
        </span>
      </div>
      <p className="lg:w-2/3">
        Hello there, I'm Muhammad Fathur Raiyan also known as Raiyan, i love
        programming especially web programming. I push my self to learn about
        web programmming it's hard but i enjoy it,
      </p>
      <p className="lg:w-2/3">
        I'm looking for opportunities to continue to learn and grow as a web
        developer, and I'm ready for challenging projects.
      </p>
    </main>
  );
}
