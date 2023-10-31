export default function Home() {
  return (
    <main className="absolute w-full top-10 min-h-screen grid grid-cols-3">
      <div className="col-span-2 grid grid-rows-2 ">
        <div className="grid grid-cols-2">
          <div className="border-r border-zinc-100"></div>
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
