'use client'

import data from "@/data/films.json";
import { useEffect, useState } from "react";
import type { Films } from "@/types";
import Link from "next/link";

function FIlms() {
  const [films, setFIlms] = useState<Films[]>([]);

  useEffect(() => {
    setFIlms(data);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Films</h1>
      <ul className="list-disc">
        {films.map((film) => (
          <li key={film.id}>
            <Link href={"/movies/FAF"}><b>{film.name}</b> — {film.description}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FIlms;
