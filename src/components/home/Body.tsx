"use client";
import Image from "next/image";
import Footer from "./Footer";
import Skill from "./Skill";
import Stack from "./Stack";
import Foto from "../../../public/foto.jpg";
import { motion } from "framer-motion";

const Body = () => {
  return (
    <>
      <div className="sm:col-span-2 grid grid-rows-2 ">
        <div className="grid sm:grid-cols-2 max-sm:grid-rows-2">
          <div className="relative border-zinc-100 p-4 flex flex-col justify-center">
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: "100%",
                transition: { ease: "easeOut", duration: 2 },
              }}
              className="mx-sm:hidden absolute w-[1px] h-full top-0 right-0 bg-zinc-100"
            />
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "100%",
                transition: { ease: "easeOut", duration: 2 },
              }}
              className="sm:hidden absolute h-[1px] w-full bottom-0 left-0 bg-zinc-100"
            />
            <h1 className="text-5xl uppercase font-medium">
              Muhammad Fathur Raiyan
            </h1>
            <div className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-zinc-100" />
              <p>Junior Web Developer</p>
            </div>
          </div>
          <div className="max-sm:-order-1 relative border-zinc-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: "100%",
                transition: { ease: "easeOut", duration: 2 },
              }}
              className="sm:hidden absolute h-[1px] w-full bottom-0 left-0 bg-zinc-100"
            />
            <Image
              className="w-full h-full object-cover"
              src={Foto}
              alt="profile"
              width={0}
              height={0}
            />
          </div>
        </div>
        <div className="sm:border-t max-sm:border-b border-zinc-100 p-4 flex flex-col justify-center">
          <h2 className="text-3xl font-medium uppercase">main tech stack</h2>
          <Stack />
          <h2 className="text-xl font-medium uppercase mt-4">Other Skill</h2>
          <Skill />
        </div>
      </div>
      <div className="grid sm:grid-rows-4">
        <div className="sm:row-span-3 sm:border-l max-sm:border-b p-4 border-zinc-100 flex flex-col justify-center">
          <h2 className="text-3xl uppercase font-medium">About me.</h2>
          <div className="mt-2 flex flex-col gap-2">
            <p>
              I am Muhammad Fathur Raiyan, 20 years old guy from Aceh,
              Indonesia. I identify my self as a junior web developer, I realy
              love about programming especialy web programing, I do front-end
              and back-end web development. I have an unstoppable passion in web
              development. I am ready to take bold steps in my career, take on
              challenging projects, and create innovative and efficient web
              solutions.
            </p>
          </div>
        </div>
        <div className="sm:border-l sm:border-t border-zinc-100 p-4 flex flex-col items-center justify-center">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Body;
