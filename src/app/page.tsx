export default function Home() {
  return (
    <main className="absolute w-full top-10 min-h-screen grid grid-cols-3">
      <div className="col-span-2 grid grid-rows-2 ">
        <div className="grid grid-cols-2">
          <div className="border-r border-zinc-100 p-2 flex flex-col justify-center">
            <h1 className="text-5xl uppercase font-medium">
              Muhammad Fathur Raiyan
            </h1>
            <p className="flex items-center gap-2">
              <div className="h-[2px] w-12 bg-zinc-100" />
              Web Developer
            </p>
          </div>
          <div className=""></div>
        </div>
        <div className="border-t border-zinc-100"></div>
      </div>
      <div className="grid grid-rows-4">
        <div className="row-span-3 border-l border-zinc-100"></div>
        <div className="border-l border-t border-zinc-100"></div>
      </div>
    </main>
  );
}
