"use client";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const [data, setData] = useState([]);

  const apiCall = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/berry");
    const data = await response.json();
    const values = data.results.map(())
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <section className="flex min-h-screen items-center justify-center">
      <h1 className="text-3xl">this is blog page</h1>
      <div>{data}</div>
    </section>
  );
}
