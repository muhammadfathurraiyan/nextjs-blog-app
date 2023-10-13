"use client";
import { useEffect, useState } from "react";

type DataType = {
  name: string;
  url: string;
};

export default function BlogPage() {
  const [data, setData] = useState<DataType[]>([]);

  const apiCall = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/berry");
    const data = await response.json();
    const values = data.results.map((res: DataType) => ({
      name: res.name,
      url: res.url,
    }));
    setData(values);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <section className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-3xl">this is blog page</h1>
      <div className="w-4/5 flex flex-wrap gap-4 items-center justify-center">
        {data.map((data: DataType, index) => (
          <div
            key={index}
            className="bg-slate-800 p-2 grow flex flex-col items-center"
          >
            <h1>{data.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
}
